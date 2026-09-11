---
schema: wang-person/v1
id: p_uHrCvB41gMR5178qTvwuSd
status: active
merged_into: null
display_name: 王懿榮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ynzaTkMCrhEFJ621LHghZo
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懿榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BnJ27Sr8p1951pnefj1waM
          claim_id: c_ynzaTkMCrhEFJ621LHghZo
          source_id: s_T4sVkDCK5AUrnaEQCPiBp4
          stance: supports
          locator: CBDB:35049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35049）
          source: &a1
            id: s_T4sVkDCK5AUrnaEQCPiBp4
            source_type: api_record
            title: 中国历代人物传记资料库：王懿榮（CBDB 35049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35049&o=json
            external_identifier: CBDB:35049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HpmBm8PFNFSkaBLicJhUwR
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1845年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1JV6F8AaFBwdJHk9AWLbKW
          claim_id: c_HpmBm8PFNFSkaBLicJhUwR
          source_id: s_T4sVkDCK5AUrnaEQCPiBp4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zJnDL44zH7c3KNxD2zUV64
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1900年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJemoJM6ocvkDgMMxQCedH
          claim_id: c_zJnDL44zH7c3KNxD2zUV64
          source_id: s_T4sVkDCK5AUrnaEQCPiBp4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8bokUnYfB2s51ps9iz95oh
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyVCLPCX9jtCQUGNAMv1JZ
          claim_id: c_8bokUnYfB2s51ps9iz95oh
          source_id: s_T4sVkDCK5AUrnaEQCPiBp4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UUTq-4OpfIARY8Yx45kY7E
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N9YGTYKs97rttAqaXy2oDv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nOLwNNmopSUUI2CCf3SlIi
          claim_id: c_UUTq-4OpfIARY8Yx45kY7E
          source_id: s_4WRczPCpFNyULLVvU4bJ14
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1876：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4WRczPCpFNyULLVvU4bJ14
            source_type: api_record
            title: 中国历代人物传记资料库：王崇煥（CBDB 517414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517414&o=json
            external_identifier: CBDB:517414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N9YGTYKs97rttAqaXy2oDv
        status: active
        display_name: 王崇煥
        merged_into_person_id: null
    - claim:
        id: c_0sX2w9sEnL7NVy_9E0b7Ya
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QVrKab4NhP9YyPmgiRAN4g
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPziNfXCRtB6lFfvTwXjxb
          claim_id: c_0sX2w9sEnL7NVy_9E0b7Ya
          source_id: s_REAomsRhNzDRenc5NxiDH6
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1876：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_REAomsRhNzDRenc5NxiDH6
            source_type: api_record
            title: 中国历代人物传记资料库：王崇烈（CBDB 517413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517413&o=json
            external_identifier: CBDB:517413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QVrKab4NhP9YyPmgiRAN4g
        status: active
        display_name: 王崇烈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_sM6H7wtNqphStegb8dNGUK
        subject_person_id: p_uHrCvB41gMR5178qTvwuSd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PYqXpUQmBjVDWZEm6K1Dc7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_peVDqKtd7vLL2Uck5mOEmJ
          claim_id: c_sM6H7wtNqphStegb8dNGUK
          source_id: s_T4sVkDCK5AUrnaEQCPiBp4
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1876：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PYqXpUQmBjVDWZEm6K1Dc7
        status: active
        display_name: 王福坤
        merged_into_person_id: null
  other: []
---

# 王懿榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懿榮 | accepted |
| birth.date | 1845年 | accepted |
| death.date | 1900年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_N9YGTYKs97rttAqaXy2oDv | 王崇煥 | accepted |
| children | p_QVrKab4NhP9YyPmgiRAN4g | 王崇烈 | accepted |
| descendants | p_PYqXpUQmBjVDWZEm6K1Dc7 | 王福坤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇煥（CBDB 517414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517414&o=json)
- [中国历代人物传记资料库：王崇烈（CBDB 517413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517413&o=json)
- [中国历代人物传记资料库：王懿榮（CBDB 35049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35049&o=json)
