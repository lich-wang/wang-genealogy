---
schema: wang-person/v1
id: p_7a2QWukYSmEM9zh4AA1o47
status: active
merged_into: null
display_name: 王得孚
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JSvtY6p2S6hU4AV1YfchXW
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BMC45wc8UFcLMg3QGmegT1
          claim_id: c_JSvtY6p2S6hU4AV1YfchXW
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
          stance: supports
          locator: CBDB:126702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126702）
          source: &a1
            id: s_52T2aSFWsr5m5vZdKN9n9v
            source_type: api_record
            title: 中国历代人物传记资料库：王得孚（CBDB 126702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126702&o=json
            external_identifier: CBDB:126702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WkQyrBxTF1WmkPSavcBLq1
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1440年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_br6tuLdUvgCPq491qUGk4j
          claim_id: c_WkQyrBxTF1WmkPSavcBLq1
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
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
        id: c_rKzw3a21sKDxipRVN8qV9R
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1530年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjSQ66wS9Q1qFvq4WkKQEc
          claim_id: c_rKzw3a21sKDxipRVN8qV9R
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
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
        id: c_JXYBRotF5czm769mLXuCiN
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得孚（1440年—1530年），明人物。籍贯涇縣，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E4LaI3-RzsolMw0DM_YBF6
          claim_id: c_JXYBRotF5czm769mLXuCiN
          source_id: s_52T2aSFWsr5m5vZdKN9n9v
          stance: supports
          locator: CBDB:126702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pKLOGgEu5PN5v0CpBIQb9-
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7a2QWukYSmEM9zh4AA1o47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-tL97yTAVk2iTzfJyjDEN
          claim_id: c_pKLOGgEu5PN5v0CpBIQb9-
          source_id: s_tQCs1Q7GMbnW8XM98pK1Rs
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tQCs1Q7GMbnW8XM98pK1Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王子榮（CBDB 241841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241841&o=json
            external_identifier: CBDB:241841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eN26ab6vRMdN7dn1bE1CDf
        status: active
        display_name: 王子榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_tBpcOBdtvxiV0o3Ni0bm4Y
        subject_person_id: p_56sUTAFmEaA2xmEhCBUKJe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7a2QWukYSmEM9zh4AA1o47
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MgKOP6oBu3t12LyCv9mcqW
          claim_id: c_tBpcOBdtvxiV0o3Ni0bm4Y
          source_id: s_G66pvrkQBVFyLYKQcjc7E3
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G66pvrkQBVFyLYKQcjc7E3
            source_type: api_record
            title: 中国历代人物传记资料库：王永芳（CBDB 241839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241839&o=json
            external_identifier: CBDB:241839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56sUTAFmEaA2xmEhCBUKJe
        status: active
        display_name: 王永芳
        merged_into_person_id: null
    - claim:
        id: c_PqTNR1fqgYfM4E_KHPOyP6
        subject_person_id: p_eSAMJxeFXaqnK1yWfAKdFJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7a2QWukYSmEM9zh4AA1o47
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d_NtcGBM4TrU4d95-QNK0f
          claim_id: c_PqTNR1fqgYfM4E_KHPOyP6
          source_id: s_HA26jyGcz1iSaNCzcar8En
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HA26jyGcz1iSaNCzcar8En
            source_type: api_record
            title: 中国历代人物传记资料库：王景銘（CBDB 241838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241838&o=json
            external_identifier: CBDB:241838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eSAMJxeFXaqnK1yWfAKdFJ
        status: active
        display_name: 王景銘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_iMg2S3F4JgdrFkaoBnFnfn
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AJqV7c5hyNaepcUXtEMsiD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-rh0xAj_vevlzp3Edhuju
          claim_id: c_iMg2S3F4JgdrFkaoBnFnfn
          source_id: s_dhSkG9z6J-Va1ipr-uvbtd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dhSkG9z6J-Va1ipr-uvbtd
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 241847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241847&o=json
            external_identifier: CBDB:241847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AJqV7c5hyNaepcUXtEMsiD
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_XbdTtFr8sdrv-AZ4fSjC2x
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NMrk4Hyiu0gcfQ62VJTA-p
          claim_id: c_XbdTtFr8sdrv-AZ4fSjC2x
          source_id: s_769ZrT0BQrD0xSazZLAP2p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_769ZrT0BQrD0xSazZLAP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 241846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json
            external_identifier: CBDB:241846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        status: active
        display_name: 王逈
        merged_into_person_id: null
    - claim:
        id: c_8-21VycsocRd-2_zvZr0-z
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_btjFhQUd8gZH3MSNL2CygU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCO4uYCc2pAtAs-c8ZM-8U
          claim_id: c_8-21VycsocRd-2_zvZr0-z
          source_id: s_Wc4EXN8zdKiLwSIgdFT75D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wc4EXN8zdKiLwSIgdFT75D
            source_type: api_record
            title: 中国历代人物传记资料库：王貌（CBDB 241845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json
            external_identifier: CBDB:241845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_btjFhQUd8gZH3MSNL2CygU
        status: active
        display_name: 王貌
        merged_into_person_id: null
    - claim:
        id: c_znUmc05kw-37Xs5fLlgBH1
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uGE9BKx8cB8q7vxNwL7651
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tncJebRq_Ge4TNOgWpD0Df
          claim_id: c_znUmc05kw-37Xs5fLlgBH1
          source_id: s_dV9S3_faAPNbXBKrXKQsqJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dV9S3_faAPNbXBKrXKQsqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王宛（CBDB 241844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json
            external_identifier: CBDB:241844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uGE9BKx8cB8q7vxNwL7651
        status: active
        display_name: 王宛
        merged_into_person_id: null
---

# 王得孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得孚 | accepted |
| birth.date | 1440年 | accepted |
| death.date | 1530年 | accepted |
| bio.summary | 王得孚（1440年—1530年），明人物。籍贯涇縣，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eN26ab6vRMdN7dn1bE1CDf | 王子榮 | accepted |
| ancestors | p_56sUTAFmEaA2xmEhCBUKJe | 王永芳 | accepted |
| ancestors | p_eSAMJxeFXaqnK1yWfAKdFJ | 王景銘 | accepted |
| other | p_AJqV7c5hyNaepcUXtEMsiD | 王道 | accepted |
| other | p_NFa8YxHNQ6Ms3eb7N5iZGG | 王逈 | accepted |
| other | p_btjFhQUd8gZH3MSNL2CygU | 王貌 | accepted |
| other | p_uGE9BKx8cB8q7vxNwL7651 | 王宛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 241847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241847&o=json)
- [中国历代人物传记资料库：王得孚（CBDB 126702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126702&o=json)
- [中国历代人物传记资料库：王景銘（CBDB 241838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241838&o=json)
- [中国历代人物传记资料库：王逈（CBDB 241846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json)
- [中国历代人物传记资料库：王貌（CBDB 241845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json)
- [中国历代人物传记资料库：王宛（CBDB 241844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json)
- [中国历代人物传记资料库：王永芳（CBDB 241839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241839&o=json)
- [中国历代人物传记资料库：王子榮（CBDB 241841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241841&o=json)
