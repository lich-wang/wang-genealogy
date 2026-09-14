---
schema: wang-person/v1
id: p_6CFCE8MuSaeScr947U7NFE
status: active
merged_into: null
display_name: 王鳳岐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zHRfnZuvKHfJhWYAeHF7c5
        subject_person_id: p_6CFCE8MuSaeScr947U7NFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳岐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Nf9AGMS3Z5QRDNfcQKTf6
          claim_id: c_zHRfnZuvKHfJhWYAeHF7c5
          source_id: s_1m8Z1YwQfj76qFKgSMMWdd
          stance: supports
          locator: CBDB:213957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213957）
          source: &a1
            id: s_1m8Z1YwQfj76qFKgSMMWdd
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳岐（CBDB 213957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213957&o=json
            external_identifier: CBDB:213957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H83fVB98kX3r1AHB6NpfrQ
        subject_person_id: p_6CFCE8MuSaeScr947U7NFE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳岐，明人物。萬曆二年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 213957）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UchK4TPhhhV2ZfFltwg2tu
          claim_id: c_H83fVB98kX3r1AHB6NpfrQ
          source_id: s_1m8Z1YwQfj76qFKgSMMWdd
          stance: supports
          locator: CBDB:213957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u3Sp1DBm6F3c8r5a7bYEWf
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6CFCE8MuSaeScr947U7NFE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HrqtLSR5NJL7SeMoXS-H70
          claim_id: c_u3Sp1DBm6F3c8r5a7bYEWf
          source_id: s_-pv-LWhC_lxjgKM2zYE9EM
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳岐 与 王鳳竹 为同胞（CBDB 记「弟」），王鳳竹 之父／母即 王鳳岐 之父／母。
          source:
            id: s_-pv-LWhC_lxjgKM2zYE9EM
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳岐（CBDB 213957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213957&o=json
            external_identifier: CBDB:213957
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
        id: c_kYxF5ohSRcOmjfqC1chZo9
        subject_person_id: p_6CFCE8MuSaeScr947U7NFE
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
        - id: cs_kCElRN14qJWZ_SPFEwMmT1
          claim_id: c_kYxF5ohSRcOmjfqC1chZo9
          source_id: s_-pv-LWhC_lxjgKM2zYE9EM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126794 王鳳竹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-pv-LWhC_lxjgKM2zYE9EM
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳岐（CBDB 213957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213957&o=json
            external_identifier: CBDB:213957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJ3TVQF9TZGy72FnBo91RN
        status: active
        display_name: 王鳳竹
        merged_into_person_id: null
---

# 王鳳岐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳岐 | accepted |
| bio.summary | 王鳳岐，明人物。萬曆二年進士，籍贯唐山。（中国历代人物传记资料库 CBDB 213957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w6yDwcSmUtcvcpcvahG8r | 王都 | accepted |
| other | p_yJ3TVQF9TZGy72FnBo91RN | 王鳳竹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳岐（CBDB 213957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213957&o=json)
