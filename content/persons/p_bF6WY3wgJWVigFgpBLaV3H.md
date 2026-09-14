---
schema: wang-person/v1
id: p_bF6WY3wgJWVigFgpBLaV3H
status: active
merged_into: null
display_name: 王璽
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sn59CQZt4Cr69QBzS8dXKK
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wWyhnfE5rzphPWPMpnSHEa
          claim_id: c_Sn59CQZt4Cr69QBzS8dXKK
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
          stance: supports
          locator: CBDB:126869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126869）
          source: &a1
            id: s_yZPHRZDqekh7sfwo5VRKKY
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 126869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126869&o=json
            external_identifier: CBDB:126869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_94KW3UEcxCxhwjTLL55tya
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dA58xHxtQbbvm1JMFs3uKL
          claim_id: c_94KW3UEcxCxhwjTLL55tya
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
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
        id: c_YH7cLBAdcZk7feVe3BhK9N
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJ5W636ribx9Xi861q56sE
          claim_id: c_YH7cLBAdcZk7feVe3BhK9N
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
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
        id: c_JaoczKD7PAB4NnEPRtUVQs
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽（1416年—1492年），明人物。明清進士進士，籍贯盩厔，入仕進士，曾任道監察御史、儒學訓導、知府。（中国历代人物传记资料库 CBDB 126869）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yvRvmOhEKokKiKKiQlgTa1
          claim_id: c_JaoczKD7PAB4NnEPRtUVQs
          source_id: s_yZPHRZDqekh7sfwo5VRKKY
          stance: supports
          locator: CBDB:126869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LfEinVRzYAVCn_mf5oHGD-
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UAY42Qb6NjwF-Mt8z5hFeq
          claim_id: c_LfEinVRzYAVCn_mf5oHGD-
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HnV2yB88d2LDzZ44BKY5Y3
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 241137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json
            external_identifier: CBDB:241137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5CsnxPJ1Pqskb685MNmLx9
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NUSWzDf21GganExuYVFbz9
        subject_person_id: p_32BLPDKJangJT5tNVMnCFe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nEb8WaeZEP1HENqOkkFdX
          claim_id: c_NUSWzDf21GganExuYVFbz9
          source_id: s_K6zqDpk8r6QfRuJW6sAPAY
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K6zqDpk8r6QfRuJW6sAPAY
            source_type: api_record
            title: 中国历代人物传记资料库：王永福（CBDB 241135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241135&o=json
            external_identifier: CBDB:241135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_32BLPDKJangJT5tNVMnCFe
        status: active
        display_name: 王永福
        merged_into_person_id: null
    - claim:
        id: c_qvoxl0X52ZkdvzcIhgUBmq
        subject_person_id: p_pKW6fjEAjiy43DojGyTLyA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJu3pH2A5NlaZAQgUsK18q
          claim_id: c_qvoxl0X52ZkdvzcIhgUBmq
          source_id: s_WuCSSCyFPoWxu11TdHRGkv
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WuCSSCyFPoWxu11TdHRGkv
            source_type: api_record
            title: 中国历代人物传记资料库：王仲文（CBDB 241136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241136&o=json
            external_identifier: CBDB:241136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pKW6fjEAjiy43DojGyTLyA
        status: active
        display_name: 王仲文
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_WTreyuqGSA7hRAeMVE0vdk
        subject_person_id: p_KAGyyPJ4MA1BSHCDetACZX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lvYlhWdQdT5Q3OPl76ogcF
          claim_id: c_WTreyuqGSA7hRAeMVE0vdk
          source_id: s_echzJn33Iy__b3emBL5cws
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_echzJn33Iy__b3emBL5cws
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 241140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241140&o=json
            external_identifier: CBDB:241140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KAGyyPJ4MA1BSHCDetACZX
        status: active
        display_name: 王琪
        merged_into_person_id: null
    - claim:
        id: c_yg0jF-drqjYLa25ldCH0Ec
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mLduwh3PRLCgxrhBnwR2sb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oJANLGsAiq9PN7UTkfDyL1
          claim_id: c_yg0jF-drqjYLa25ldCH0Ec
          source_id: s_j2aqBVao9rLAqJQ0WbYebp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j2aqBVao9rLAqJQ0WbYebp
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 241144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json
            external_identifier: CBDB:241144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mLduwh3PRLCgxrhBnwR2sb
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_fZRPxNFKpIYCwnUE9unYQH
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mdGE4iAKLrnoGXRcNuRgmr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQtxuwjc_tvXAfmcvdcU7c
          claim_id: c_fZRPxNFKpIYCwnUE9unYQH
          source_id: s_7St6wLZpaUNgyuGcnt1dxs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7St6wLZpaUNgyuGcnt1dxs
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 241146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241146&o=json
            external_identifier: CBDB:241146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mdGE4iAKLrnoGXRcNuRgmr
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_A0twQzZElBAYsVOWyDrmMK
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_myWGEdMf9oQRaYDVQ5B4AT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WONYT3FMX_27RUDqkJUblk
          claim_id: c_A0twQzZElBAYsVOWyDrmMK
          source_id: s_Ru1_5q5pi3Iw1cgED0OVGZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ru1_5q5pi3Iw1cgED0OVGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 241145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json
            external_identifier: CBDB:241145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_myWGEdMf9oQRaYDVQ5B4AT
        status: active
        display_name: 王珉
        merged_into_person_id: null
    - claim:
        id: c_wh1s7MmNSovQqvHJBzvlMp
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qpXowMgyHyNwAFFkG4Vfky
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qqH8BNJBMbCCgEUAMjojff
          claim_id: c_wh1s7MmNSovQqvHJBzvlMp
          source_id: s___JZAw4TrrYB5-hraLM2SN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s___JZAw4TrrYB5-hraLM2SN
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 241143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json
            external_identifier: CBDB:241143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qpXowMgyHyNwAFFkG4Vfky
        status: active
        display_name: 王璟
        merged_into_person_id: null
    - claim:
        id: c_JzvgXS3eZH57Gf-Hm9mV0N
        subject_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tq3WBS19JRoVJUH3RrY8U5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BI5uyQLrmHFIPZ0uuVQpgk
          claim_id: c_JzvgXS3eZH57Gf-Hm9mV0N
          source_id: s_l_TCYOzPHS4qq57l8TBSU5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126869 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l_TCYOzPHS4qq57l8TBSU5
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 241141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241141&o=json
            external_identifier: CBDB:241141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tq3WBS19JRoVJUH3RrY8U5
        status: active
        display_name: 王璿
        merged_into_person_id: null
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| birth.date | 1416年 | accepted |
| death.date | 1492年 | accepted |
| bio.summary | 王璽（1416年—1492年），明人物。明清進士進士，籍贯盩厔，入仕進士，曾任道監察御史、儒學訓導、知府。（中国历代人物传记资料库 CBDB 126869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5CsnxPJ1Pqskb685MNmLx9 | 王鎬 | accepted |
| ancestors | p_32BLPDKJangJT5tNVMnCFe | 王永福 | accepted |
| ancestors | p_pKW6fjEAjiy43DojGyTLyA | 王仲文 | accepted |
| other | p_KAGyyPJ4MA1BSHCDetACZX | 王琪 | accepted |
| other | p_mLduwh3PRLCgxrhBnwR2sb | 王瑜 | accepted |
| other | p_mdGE4iAKLrnoGXRcNuRgmr | 王琮 | accepted |
| other | p_myWGEdMf9oQRaYDVQ5B4AT | 王珉 | accepted |
| other | p_qpXowMgyHyNwAFFkG4Vfky | 王璟 | accepted |
| other | p_tq3WBS19JRoVJUH3RrY8U5 | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 241146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241146&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 241137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json)
- [中国历代人物传记资料库：王璟（CBDB 241143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241143&o=json)
- [中国历代人物传记资料库：王珉（CBDB 241145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241145&o=json)
- [中国历代人物传记资料库：王琪（CBDB 241140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241140&o=json)
- [中国历代人物传记资料库：王璽（CBDB 126869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126869&o=json)
- [中国历代人物传记资料库：王璿（CBDB 241141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241141&o=json)
- [中国历代人物传记资料库：王永福（CBDB 241135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241135&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 241144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241144&o=json)
- [中国历代人物传记资料库：王仲文（CBDB 241136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241136&o=json)
