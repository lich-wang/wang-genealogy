---
schema: wang-person/v1
id: p_5KFz2XTNmFB2Vb5p3SFsG7
status: active
merged_into: null
display_name: 王翁喜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_27gzyX5JkPsMTmfUe6i8aX
        subject_person_id: p_5KFz2XTNmFB2Vb5p3SFsG7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zMEaoKmiA3wo5Qr4zq91ur
          claim_id: c_27gzyX5JkPsMTmfUe6i8aX
          source_id: s_x1UqLrBAP1f2uqUwP1KbwE
          stance: supports
          locator: CBDB:689353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689353）
          source: &a1
            id: s_x1UqLrBAP1f2uqUwP1KbwE
            source_type: api_record
            title: 中国历代人物传记资料库：王翁喜（CBDB 689353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689353&o=json
            external_identifier: CBDB:689353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cVmBpV8QDWCRc6PDD9mLxY
        subject_person_id: p_5KFz2XTNmFB2Vb5p3SFsG7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翁喜，史料所见人物。本项目依据《中国历代人物传记资料库：王翁喜（CBDB 689353）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C6AofQohnNaKpg49r8wftL
          claim_id: c_cVmBpV8QDWCRc6PDD9mLxY
          source_id: s_x1UqLrBAP1f2uqUwP1KbwE
          stance: supports
          locator: CBDB:689353
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
        id: c_tl_6SUe4PfV_yH_K4MkcAK
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5KFz2XTNmFB2Vb5p3SFsG7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8td2mseel_66JyFUi0bouc
          claim_id: c_tl_6SUe4PfV_yH_K4MkcAK
          source_id: s_x1UqLrBAP1f2uqUwP1KbwE
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

# 王翁喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翁喜 | accepted |
| bio.summary | 王翁喜，史料所见人物。本项目依据《中国历代人物传记资料库：王翁喜（CBDB 689353）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翁喜（CBDB 689353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689353&o=json)
