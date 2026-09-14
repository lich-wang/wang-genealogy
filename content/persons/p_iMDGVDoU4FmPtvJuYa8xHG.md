---
schema: wang-person/v1
id: p_iMDGVDoU4FmPtvJuYa8xHG
status: active
merged_into: null
display_name: 王諭
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNgXBK87GL5KXSHdpbBr3E
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EmfEgNQMubCiQAsAW9fBJW
          claim_id: c_ZNgXBK87GL5KXSHdpbBr3E
          source_id: s_XbXBzM4ADW9i9aYzFYufCe
          stance: supports
          locator: CBDB:298420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298420）
          source: &a1
            id: s_XbXBzM4ADW9i9aYzFYufCe
            source_type: api_record
            title: 中国历代人物传记资料库：王諭（CBDB 298420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298420&o=json
            external_identifier: CBDB:298420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zhFh8fBVWsoQoWJUKL327Z
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諭，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298420）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_79NFtAFwqFtBi8R273kzJv
          claim_id: c_zhFh8fBVWsoQoWJUKL327Z
          source_id: s_XbXBzM4ADW9i9aYzFYufCe
          stance: supports
          locator: CBDB:298420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PYmUeqQTC2te0wbkMEKz96
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_axvKJHczRE94VwEvMVemSc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2afIHad7ryqMKozwIQSCAa
          claim_id: c_PYmUeqQTC2te0wbkMEKz96
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ugxK1xzvCFSxHdB96HR2ap
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 203015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json
            external_identifier: CBDB:203015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_axvKJHczRE94VwEvMVemSc
        status: active
        display_name: 王一言
        merged_into_person_id: null
    - claim:
        id: c_K24GMbFg4pRKKZOsVB2BCu
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mHTDv44Rhrt8TAWbQCrPB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YJhvKXVOv5pEVgwoZ-lxIw
          claim_id: c_K24GMbFg4pRKKZOsVB2BCu
          source_id: s_DbLaCoWaVcJmmvXFRljmH_
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一卿 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一卿 之父／母。
          source:
            id: s_DbLaCoWaVcJmmvXFRljmH_
            source_type: api_record
            title: 中国历代人物传记资料库：王一卿（CBDB 298428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json
            external_identifier: CBDB:298428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7mHTDv44Rhrt8TAWbQCrPB
        status: active
        display_name: 王一卿
        merged_into_person_id: null
    - claim:
        id: c_hwelD-xFkX871Hvy_SQIrp
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HmNYQYLNPST1KTGaUUv8oM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pjafc4phsYKaeDFZ-0Pp6r
          claim_id: c_hwelD-xFkX871Hvy_SQIrp
          source_id: s_f0QGPoN4sF7BiVk9-47AzN
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一麟 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一麟 之父／母。
          source:
            id: s_f0QGPoN4sF7BiVk9-47AzN
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 298429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json
            external_identifier: CBDB:298429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HmNYQYLNPST1KTGaUUv8oM
        status: active
        display_name: 王一麟
        merged_into_person_id: null
    - claim:
        id: c_Rmj-FVLqd-mSgR4em39jYE
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W5C5henR9j5M8DcZUztEWA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_edsfBxXV69JeSBYNVtv57V
          claim_id: c_Rmj-FVLqd-mSgR4em39jYE
          source_id: s_GgSwFo53LKzsde3_215-5U
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一麒 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一麒 之父／母。
          source:
            id: s_GgSwFo53LKzsde3_215-5U
            source_type: api_record
            title: 中国历代人物传记资料库：王一麒（CBDB 298430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298430&o=json
            external_identifier: CBDB:298430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W5C5henR9j5M8DcZUztEWA
        status: active
        display_name: 王一麒
        merged_into_person_id: null
    - claim:
        id: c_bcjhLG9D7ot1PIss64kciw
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yn5ABuRW9QJNhz87KhQtFX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HDfyx-JQoLynUzp7Vqs1VV
          claim_id: c_bcjhLG9D7ot1PIss64kciw
          source_id: s_IhutC4VuxKuNo59S-SlYC7
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一齊 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一齊 之父／母。
          source:
            id: s_IhutC4VuxKuNo59S-SlYC7
            source_type: api_record
            title: 中国历代人物传记资料库：王一齊（CBDB 298425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298425&o=json
            external_identifier: CBDB:298425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yn5ABuRW9QJNhz87KhQtFX
        status: active
        display_name: 王一齊
        merged_into_person_id: null
    - claim:
        id: c_pLOOn2JqbugnK71BE5GW3O
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h94RYJsotCcXbyJGXE7U2C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvGRXNT-DHkW56K839_oqA
          claim_id: c_pLOOn2JqbugnK71BE5GW3O
          source_id: s_60Iug9oNp2eoh_rtFaaZ2u
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一弼 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一弼 之父／母。
          source:
            id: s_60Iug9oNp2eoh_rtFaaZ2u
            source_type: api_record
            title: 中国历代人物传记资料库：王一弼（CBDB 298426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json
            external_identifier: CBDB:298426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h94RYJsotCcXbyJGXE7U2C
        status: active
        display_name: 王一弼
        merged_into_person_id: null
    - claim:
        id: c_NhYnqqVU9bGwZkHeWMEN9J
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t7hYP4ir43vJB9in2jAKht
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KD-4NiogxIDyNYUeLnzCRj
          claim_id: c_NhYnqqVU9bGwZkHeWMEN9J
          source_id: s_hc1RE02H-jAXWuT9iUGFnb
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一袞 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一袞 之父／母。
          source:
            id: s_hc1RE02H-jAXWuT9iUGFnb
            source_type: api_record
            title: 中国历代人物传记资料库：王一袞（CBDB 298423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298423&o=json
            external_identifier: CBDB:298423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t7hYP4ir43vJB9in2jAKht
        status: active
        display_name: 王一袞
        merged_into_person_id: null
    - claim:
        id: c_b3H5HhR63an1kkD0-Ofulg
        subject_person_id: p_iMDGVDoU4FmPtvJuYa8xHG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fuBPr-1LAdcqFf3P-3gHLb
          claim_id: c_b3H5HhR63an1kkD0-Ofulg
          source_id: s_kwnqevomL2-vtTpnaZdClx
          stance: supports
          locator: CBDB：兄弟 王一言（203015）之父／母 王諭
          quotation: null
          interpretation_note: 由兄弟关系推断：王一臣 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一臣 之父／母。
          source:
            id: s_kwnqevomL2-vtTpnaZdClx
            source_type: api_record
            title: 中国历代人物传记资料库：王一臣（CBDB 298427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json
            external_identifier: CBDB:298427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zaLZ7MeMFzW6L2M9Y63jvQ
        status: active
        display_name: 王一臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諭 | accepted |
| bio.summary | 王諭，明人物。嘉靖十四年進士，籍贯福清。（中国历代人物传记资料库 CBDB 298420） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_axvKJHczRE94VwEvMVemSc | 王一言 | accepted |
| children | p_7mHTDv44Rhrt8TAWbQCrPB | 王一卿 | accepted |
| children | p_HmNYQYLNPST1KTGaUUv8oM | 王一麟 | accepted |
| children | p_W5C5henR9j5M8DcZUztEWA | 王一麒 | accepted |
| children | p_Yn5ABuRW9QJNhz87KhQtFX | 王一齊 | accepted |
| children | p_h94RYJsotCcXbyJGXE7U2C | 王一弼 | accepted |
| children | p_t7hYP4ir43vJB9in2jAKht | 王一袞 | accepted |
| children | p_zaLZ7MeMFzW6L2M9Y63jvQ | 王一臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一弼（CBDB 298426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298426&o=json)
- [中国历代人物传记资料库：王一臣（CBDB 298427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298427&o=json)
- [中国历代人物传记资料库：王一袞（CBDB 298423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298423&o=json)
- [中国历代人物传记资料库：王一麟（CBDB 298429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298429&o=json)
- [中国历代人物传记资料库：王一齊（CBDB 298425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298425&o=json)
- [中国历代人物传记资料库：王一麒（CBDB 298430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298430&o=json)
- [中国历代人物传记资料库：王一卿（CBDB 298428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298428&o=json)
- [中国历代人物传记资料库：王一言（CBDB 203015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json)
- [中国历代人物传记资料库：王諭（CBDB 298420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298420&o=json)
