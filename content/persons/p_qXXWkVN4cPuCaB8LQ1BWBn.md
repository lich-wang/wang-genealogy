---
schema: wang-person/v1
id: p_qXXWkVN4cPuCaB8LQ1BWBn
status: active
merged_into: null
display_name: 王玘
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WmDez5h5aD42zDgfiA8zMh
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mwNc64AgrkuNXLuh3r9uQW
          claim_id: c_WmDez5h5aD42zDgfiA8zMh
          source_id: s_J6q77sWhhnTtTFZALZXVm6
          stance: supports
          locator: CBDB:260341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260341）
          source: &a1
            id: s_J6q77sWhhnTtTFZALZXVm6
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 260341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260341&o=json
            external_identifier: CBDB:260341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PhbCeQthXkeHormH73ATei
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。成化二十三年進士，籍贯榮昌。（中国历代人物传记资料库 CBDB 260341）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f60Yche6Vg7m3fVmrkuNTr
          claim_id: c_PhbCeQthXkeHormH73ATei
          source_id: s_J6q77sWhhnTtTFZALZXVm6
          stance: supports
          locator: CBDB:260341
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HuEAUIs0d7Q214wP2VWdcO
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uBDJjG7sJNJM9ZmFoir4HY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJrmPuAB4nS1x89MdoxSdo
          claim_id: c_HuEAUIs0d7Q214wP2VWdcO
          source_id: s_J6q77sWhhnTtTFZALZXVm6
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uBDJjG7sJNJM9ZmFoir4HY
        status: active
        display_name: 王貫
        merged_into_person_id: null
    - claim:
        id: c_rlUEM1eqegorEZtfdDAFQO
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L1Ld8vqoE3DVKoVeesVKff
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vgTqQ4QR1ID__RoLz2XVk6
          claim_id: c_rlUEM1eqegorEZtfdDAFQO
          source_id: s_Kz_BcYfVah1xAMiamvhjyT
          stance: supports
          locator: CBDB：兄弟 王貫（200606）之父／母 王玘
          quotation: null
          interpretation_note: 由兄弟关系推断：王翀 与 王貫 为同胞（CBDB 记「弟」），王貫 之父／母即 王翀 之父／母。
          source:
            id: s_Kz_BcYfVah1xAMiamvhjyT
            source_type: api_record
            title: 中国历代人物传记资料库：王翀（CBDB 260344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260344&o=json
            external_identifier: CBDB:260344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1Ld8vqoE3DVKoVeesVKff
        status: active
        display_name: 王翀
        merged_into_person_id: null
    - claim:
        id: c_oRc6UUEPTnvg8wPaw0OXjB
        subject_person_id: p_qXXWkVN4cPuCaB8LQ1BWBn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oTjwFW82cDAsgh765nM8QW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCNhbubaC203V1PHvhnV6P
          claim_id: c_oRc6UUEPTnvg8wPaw0OXjB
          source_id: s_yXmPAzbFygS8k5NfPKPiur
          stance: supports
          locator: CBDB：兄弟 王貫（200606）之父／母 王玘
          quotation: null
          interpretation_note: 由兄弟关系推断：王昭純 与 王貫 为同胞（CBDB 记「兄」），王貫 之父／母即 王昭純 之父／母。
          source:
            id: s_yXmPAzbFygS8k5NfPKPiur
            source_type: api_record
            title: 中国历代人物传记资料库：王昭純（CBDB 260345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260345&o=json
            external_identifier: CBDB:260345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oTjwFW82cDAsgh765nM8QW
        status: active
        display_name: 王昭純
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。成化二十三年進士，籍贯榮昌。（中国历代人物传记资料库 CBDB 260341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uBDJjG7sJNJM9ZmFoir4HY | 王貫 | accepted |
| children | p_L1Ld8vqoE3DVKoVeesVKff | 王翀 | accepted |
| children | p_oTjwFW82cDAsgh765nM8QW | 王昭純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翀（CBDB 260344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260344&o=json)
- [中国历代人物传记资料库：王玘（CBDB 260341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260341&o=json)
- [中国历代人物传记资料库：王昭純（CBDB 260345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260345&o=json)
