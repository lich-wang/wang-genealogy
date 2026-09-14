---
schema: wang-person/v1
id: p_PGU15Ugu5s9NEWpLjgtEC5
status: active
merged_into: null
display_name: 王獻
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_exMxY6s225HGryXFTLFjVH
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ru4c2aij3ex7ebpHPc33Bj
          claim_id: c_exMxY6s225HGryXFTLFjVH
          source_id: s_MECmV15hg2YDFZBndvairR
          stance: supports
          locator: CBDB:252946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252946）
          source: &a1
            id: s_MECmV15hg2YDFZBndvairR
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 252946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252946&o=json
            external_identifier: CBDB:252946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cuC6YRnxL66T93nWUXrqAu
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻，明人物。景泰五年進士，籍贯安福，曾任學正。（中国历代人物传记资料库 CBDB 252946）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z4GByTLy9Kh15B0fk0M7JM
          claim_id: c_cuC6YRnxL66T93nWUXrqAu
          source_id: s_MECmV15hg2YDFZBndvairR
          stance: supports
          locator: CBDB:252946
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iXLkH5UpHZAOAUYGntWKIL
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXUlIk2YxCspqKpwzMUiFS
          claim_id: c_iXLkH5UpHZAOAUYGntWKIL
          source_id: s_UbMDK3watKgmMGbKALPCAi
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UbMDK3watKgmMGbKALPCAi
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 198292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json
            external_identifier: CBDB:198292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
    - claim:
        id: c_5ctDr6QOG3iXojjrHUj2r_
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HoTeR6NiLikZBQsprSqNQC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1wQFeZtGwhYH9HBECWsTn2
          claim_id: c_5ctDr6QOG3iXojjrHUj2r_
          source_id: s_MeVX1sAXQ8IEn1PO8NX-_t
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王蕩 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王蕩 之父／母。
          source:
            id: s_MeVX1sAXQ8IEn1PO8NX-_t
            source_type: api_record
            title: 中国历代人物传记资料库：王蕩（CBDB 252991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252991&o=json
            external_identifier: CBDB:252991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HoTeR6NiLikZBQsprSqNQC
        status: active
        display_name: 王蕩
        merged_into_person_id: null
    - claim:
        id: c_D6SQOXAWw8E-_f1qTXwLbQ
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KQQbkA9tXwvNw47yGBx6Jg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e4DCsKHp5D8eU8TFbpYYG_
          claim_id: c_D6SQOXAWw8E-_f1qTXwLbQ
          source_id: s_ze9mOGeYccJsvTM3N7j2lA
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王縝 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王縝 之父／母。
          source:
            id: s_ze9mOGeYccJsvTM3N7j2lA
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 253035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253035&o=json
            external_identifier: CBDB:253035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KQQbkA9tXwvNw47yGBx6Jg
        status: active
        display_name: 王縝
        merged_into_person_id: null
    - claim:
        id: c_4AePdJCQ9AxSey-vAdTF8A
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZS7hV2qKy5RdfA9dLvzwpE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTQuZ6jwAB4Z7xGWZZWcu1
          claim_id: c_4AePdJCQ9AxSey-vAdTF8A
          source_id: s_WQPbSjjDZwQV02yNT6oq7P
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王徽 之父／母。
          source:
            id: s_WQPbSjjDZwQV02yNT6oq7P
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 253013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253013&o=json
            external_identifier: CBDB:253013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZS7hV2qKy5RdfA9dLvzwpE
        status: active
        display_name: 王徽
        merged_into_person_id: null
    - claim:
        id: c_tva3md9p2GCkA17MDjO8vo
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mqnjJjN3pAFwnMTNBoT7ck
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jSR8moDK12ZsxHNdy6uy9t
          claim_id: c_tva3md9p2GCkA17MDjO8vo
          source_id: s_D14al2Uk7IrT1quAh6DfJh
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王平 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王平 之父／母。
          source:
            id: s_D14al2Uk7IrT1quAh6DfJh
            source_type: api_record
            title: 中国历代人物传记资料库：王平（CBDB 253024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253024&o=json
            external_identifier: CBDB:253024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mqnjJjN3pAFwnMTNBoT7ck
        status: active
        display_name: 王平
        merged_into_person_id: null
    - claim:
        id: c_3SKbe7mZ9tNdOOJ29W8eBu
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qh6HnmoBoLuDbeGD9ubHGt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5o7KtnaOX7NSnnEjDvBUT
          claim_id: c_3SKbe7mZ9tNdOOJ29W8eBu
          source_id: s_skP-fZ_ZfFvuMujhHTBTsk
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王慥 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王慥 之父／母。
          source:
            id: s_skP-fZ_ZfFvuMujhHTBTsk
            source_type: api_record
            title: 中国历代人物传记资料库：王慥（CBDB 253002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253002&o=json
            external_identifier: CBDB:253002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qh6HnmoBoLuDbeGD9ubHGt
        status: active
        display_name: 王慥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| bio.summary | 王獻，明人物。景泰五年進士，籍贯安福，曾任學正。（中国历代人物传记资料库 CBDB 252946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |
| children | p_HoTeR6NiLikZBQsprSqNQC | 王蕩 | accepted |
| children | p_KQQbkA9tXwvNw47yGBx6Jg | 王縝 | accepted |
| children | p_ZS7hV2qKy5RdfA9dLvzwpE | 王徽 | accepted |
| children | p_mqnjJjN3pAFwnMTNBoT7ck | 王平 | accepted |
| children | p_qh6HnmoBoLuDbeGD9ubHGt | 王慥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縝（CBDB 253035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253035&o=json)
- [中国历代人物传记资料库：王蕩（CBDB 252991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252991&o=json)
- [中国历代人物传记资料库：王徽（CBDB 253013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253013&o=json)
- [中国历代人物传记资料库：王平（CBDB 253024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253024&o=json)
- [中国历代人物传记资料库：王齊（CBDB 198292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json)
- [中国历代人物传记资料库：王獻（CBDB 252946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252946&o=json)
- [中国历代人物传记资料库：王慥（CBDB 253002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253002&o=json)
