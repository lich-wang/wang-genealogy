---
schema: wang-person/v1
id: p_CSmTqHxqedNwe6Ap9XLU3b
status: active
merged_into: null
display_name: 王鳳賡
cbdb_id: 213958
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F7D2wBs1a2JSuEGmFJYLC2
        subject_person_id: p_CSmTqHxqedNwe6Ap9XLU3b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳賡，明人物。萬曆二年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 213958）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_obkmzTJciZ5P5tx4LqUPxE
          claim_id: c_F7D2wBs1a2JSuEGmFJYLC2
          source_id: s_2DWUPY5aWA9jMf8zE46C13
          stance: supports
          locator: CBDB:213958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2DWUPY5aWA9jMf8zE46C13
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳賡（CBDB 213958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213958&o=json
            external_identifier: CBDB:213958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_otgt6CVjszVFGwxkZYfibv
        subject_person_id: p_CSmTqHxqedNwe6Ap9XLU3b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳賡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TY7fYo1wDqsLH487meEWQj
          claim_id: c_otgt6CVjszVFGwxkZYfibv
          source_id: s_2DWUPY5aWA9jMf8zE46C13
          stance: supports
          locator: CBDB:213958
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_39O-wWTDavYZHrasjqr_IJ
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CSmTqHxqedNwe6Ap9XLU3b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Na3MRaf96k9yyFsDXywAUf
          claim_id: c_39O-wWTDavYZHrasjqr_IJ
          source_id: s_jVPG22yifkkyIVaNMY7awo
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳賡 与 王鳳竹 为同胞（CBDB 记「兄」），王鳳竹 之父／母即 王鳳賡 之父／母。
          source:
            id: s_jVPG22yifkkyIVaNMY7awo
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳賡（CBDB 213958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213958&o=json
            external_identifier: CBDB:213958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3w6yDwcSmUtcvcpcvahG8r
        status: active
        display_name: 王都
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sOh80c4yYmutLycERPOBCq
        subject_person_id: p_CSmTqHxqedNwe6Ap9XLU3b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hn0YQJG2Aeb9UuOB0KqX0Y
          claim_id: c_sOh80c4yYmutLycERPOBCq
          source_id: s_jVPG22yifkkyIVaNMY7awo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126794 王鳳竹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jVPG22yifkkyIVaNMY7awo
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳賡（CBDB 213958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213958&o=json
            external_identifier: CBDB:213958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJ3TVQF9TZGy72FnBo91RN
        status: active
        display_name: 王鳳竹
        merged_into_person_id: null
---

# 王鳳賡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鳳賡，明人物。萬曆二年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 213958） | accepted |
| name.primary | 王鳳賡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w6yDwcSmUtcvcpcvahG8r | 王都 | accepted |
| other | p_yJ3TVQF9TZGy72FnBo91RN | 王鳳竹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳賡（CBDB 213958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213958&o=json)
