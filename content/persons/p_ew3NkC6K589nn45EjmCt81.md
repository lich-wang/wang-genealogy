---
schema: wang-person/v1
id: p_ew3NkC6K589nn45EjmCt81
status: active
merged_into: null
display_name: 王知濬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7jheSzysRFo57P7nekDUDm
        subject_person_id: p_ew3NkC6K589nn45EjmCt81
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JsA6tphkMraVWxiA9JfXvt
          claim_id: c_7jheSzysRFo57P7nekDUDm
          source_id: s_JqE6kMDRdPnYkYwS3qF6ox
          stance: supports
          locator: CBDB:689300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689300）
          source: &a1
            id: s_JqE6kMDRdPnYkYwS3qF6ox
            source_type: api_record
            title: 中国历代人物传记资料库：王知濬（CBDB 689300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689300&o=json
            external_identifier: CBDB:689300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HfxFj32AE2np1Rd5Qq9kju
        subject_person_id: p_ew3NkC6K589nn45EjmCt81
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知濬，史料所见人物。本项目依据《中国历代人物传记资料库：王知濬（CBDB 689300）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9VmZiNmDDoE6fTRDOidHkv
          claim_id: c_HfxFj32AE2np1Rd5Qq9kju
          source_id: s_JqE6kMDRdPnYkYwS3qF6ox
          stance: supports
          locator: CBDB:689300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_31XvdoYJcQK8ykqEGgD7ot
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ew3NkC6K589nn45EjmCt81
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UYcwECh0Plg5jO_Hv26I01
          claim_id: c_31XvdoYJcQK8ykqEGgD7ot
          source_id: s_JqE6kMDRdPnYkYwS3qF6ox
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知濬 | accepted |
| bio.summary | 王知濬，史料所见人物。本项目依据《中国历代人物传记资料库：王知濬（CBDB 689300）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王知濬（CBDB 689300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689300&o=json)
