---
schema: wang-person/v1
id: p_WxESaqfXoRne3LVPqRgpV4
status: active
merged_into: null
display_name: 王珪
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BdwGVQQPayX3LovTwUtDj7
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LLwzYQPoJVuzZQmqUXbcei
          claim_id: c_BdwGVQQPayX3LovTwUtDj7
          source_id: s_MmkSBTq62nev9HTtT8M18S
          stance: supports
          locator: CBDB:237440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237440）
          source: &a1
            id: s_MmkSBTq62nev9HTtT8M18S
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 237440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237440&o=json
            external_identifier: CBDB:237440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T9kjFdq235i4abgSmkA5Wg
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。正統四年進士，籍贯上蔡。（中国历代人物传记资料库 CBDB 237440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eNZa81ZeL8tNyzv8qDsBm1
          claim_id: c_T9kjFdq235i4abgSmkA5Wg
          source_id: s_MmkSBTq62nev9HTtT8M18S
          stance: supports
          locator: CBDB:237440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pB__r2kpggkzHomtmlZb8O
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHV6AgtpcgRLpJFycLHnbd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CFzD8E9X8yyonwDE5ZGi4v
          claim_id: c_pB__r2kpggkzHomtmlZb8O
          source_id: s_BrL8FgKbWmjfM3JrsFKFu6
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BrL8FgKbWmjfM3JrsFKFu6
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 67212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json
            external_identifier: CBDB:67212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHV6AgtpcgRLpJFycLHnbd
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_dbQcAO4bBCqa430KtahxBn
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BFgu3SogUB9549PW3BJcn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzdP_LQ5liBefuAjbVEqQW
          claim_id: c_dbQcAO4bBCqa430KtahxBn
          source_id: s_vMyPLSoGYC-w-HM-JgUXhn
          stance: supports
          locator: CBDB：兄弟 王信（67212）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王惠 与 王信 为同胞（CBDB 记「兄」），王信 之父／母即 王惠 之父／母。
          source:
            id: s_vMyPLSoGYC-w-HM-JgUXhn
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 237447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237447&o=json
            external_identifier: CBDB:237447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BFgu3SogUB9549PW3BJcn9
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_d4FMtaboEH7gTEURtWwnSj
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HQmGS2187395LLmBpEXNhv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KVKe-VbNP0ocZ-D8YkHOjY
          claim_id: c_d4FMtaboEH7gTEURtWwnSj
          source_id: s_XNuCYuZipnPpA28jhPZXHr
          stance: supports
          locator: CBDB：兄弟 王信（67212）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王思聰 与 王信 为同胞（CBDB 记「弟」），王信 之父／母即 王思聰 之父／母。
          source:
            id: s_XNuCYuZipnPpA28jhPZXHr
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 237444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json
            external_identifier: CBDB:237444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HQmGS2187395LLmBpEXNhv
        status: active
        display_name: 王思聰
        merged_into_person_id: null
    - claim:
        id: c_Vj5NJZWB1JZqRDvf1UBWfA
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jsam511Bo4XWttmCAXo39u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AJjJ2DwquiVj-VBc8I6aih
          claim_id: c_Vj5NJZWB1JZqRDvf1UBWfA
          source_id: s_EG7brDyF5CttJGC3E8ovjG
          stance: supports
          locator: CBDB：兄弟 王信（67212）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王敏 与 王信 为同胞（CBDB 记「兄」），王信 之父／母即 王敏 之父／母。
          source:
            id: s_EG7brDyF5CttJGC3E8ovjG
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 237446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237446&o=json
            external_identifier: CBDB:237446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Jsam511Bo4XWttmCAXo39u
        status: active
        display_name: 王敏
        merged_into_person_id: null
    - claim:
        id: c_0vOeynkBLjVOO_dLIanBbw
        subject_person_id: p_WxESaqfXoRne3LVPqRgpV4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QuRKgQ7yCNQtwDzkmHCzuU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xykOo6_ClQYx3ySFCDQlby
          claim_id: c_0vOeynkBLjVOO_dLIanBbw
          source_id: s_Q9gJljrUfmMvQDIsi3WNG2
          stance: supports
          locator: CBDB：兄弟 王信（67212）之父／母 王珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王思明 与 王信 为同胞（CBDB 记「弟」），王信 之父／母即 王思明 之父／母。
          source:
            id: s_Q9gJljrUfmMvQDIsi3WNG2
            source_type: api_record
            title: 中国历代人物传记资料库：王思明（CBDB 237445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json
            external_identifier: CBDB:237445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuRKgQ7yCNQtwDzkmHCzuU
        status: active
        display_name: 王思明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。正統四年進士，籍贯上蔡。（中国历代人物传记资料库 CBDB 237440） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dHV6AgtpcgRLpJFycLHnbd | 王信 | accepted |
| children | p_BFgu3SogUB9549PW3BJcn9 | 王惠 | accepted |
| children | p_HQmGS2187395LLmBpEXNhv | 王思聰 | accepted |
| children | p_Jsam511Bo4XWttmCAXo39u | 王敏 | accepted |
| children | p_QuRKgQ7yCNQtwDzkmHCzuU | 王思明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 237440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237440&o=json)
- [中国历代人物传记资料库：王惠（CBDB 237447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237447&o=json)
- [中国历代人物传记资料库：王敏（CBDB 237446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237446&o=json)
- [中国历代人物传记资料库：王思聰（CBDB 237444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237444&o=json)
- [中国历代人物传记资料库：王思明（CBDB 237445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237445&o=json)
- [中国历代人物传记资料库：王信（CBDB 67212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67212&o=json)
