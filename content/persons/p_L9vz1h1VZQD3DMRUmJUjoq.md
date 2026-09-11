---
schema: wang-person/v1
id: p_L9vz1h1VZQD3DMRUmJUjoq
status: active
merged_into: null
display_name: 王要羅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7imZ9ffeH9wzPRuuXnB7vF
        subject_person_id: p_L9vz1h1VZQD3DMRUmJUjoq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王要羅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82PK3Kg8iE8a1WJYKHMDVL
          claim_id: c_7imZ9ffeH9wzPRuuXnB7vF
          source_id: s_9rJ6oxjpqZZxD1DN8WysZ9
          stance: supports
          locator: CBDB:689360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689360）
          source: &a1
            id: s_9rJ6oxjpqZZxD1DN8WysZ9
            source_type: api_record
            title: 中国历代人物传记资料库：王要羅（CBDB 689360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689360&o=json
            external_identifier: CBDB:689360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dBbHTy1Dd1XJF14FEybTFi
        subject_person_id: p_L9vz1h1VZQD3DMRUmJUjoq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王要羅，史料所见人物。本项目依据《中国历代人物传记资料库：王要羅（CBDB 689360）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_js69ThSrHBJ1k3TNit6ysg
          claim_id: c_dBbHTy1Dd1XJF14FEybTFi
          source_id: s_9rJ6oxjpqZZxD1DN8WysZ9
          stance: supports
          locator: CBDB:689360
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yYvnNgEwGb7EdnQzXjcp04
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_L9vz1h1VZQD3DMRUmJUjoq
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iC349KUIMNiJ2Usr51gixg
          claim_id: c_yYvnNgEwGb7EdnQzXjcp04
          source_id: s_9rJ6oxjpqZZxD1DN8WysZ9
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王要羅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王要羅 | accepted |
| bio.summary | 王要羅，史料所见人物。本项目依据《中国历代人物传记资料库：王要羅（CBDB 689360）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王要羅（CBDB 689360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689360&o=json)
