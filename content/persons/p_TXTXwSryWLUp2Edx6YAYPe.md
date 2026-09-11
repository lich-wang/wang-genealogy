---
schema: wang-person/v1
id: p_TXTXwSryWLUp2Edx6YAYPe
status: active
merged_into: null
display_name: 王永年
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hHGqrnyTvdQ75xnY5CqDDb
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vNA2ExQwbwVHhqxBhMA7Pu
          claim_id: c_hHGqrnyTvdQ75xnY5CqDDb
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: CBDB:17656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17656）
          source: &a1
            id: s_GzuwDJtuZq25gZiJYdCJcE
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 17656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17656&o=json
            external_identifier: CBDB:17656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q98ddrzZC4jmhoioWMxKHG
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1055年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeBtMk4Jq29hADbCDrUGnC
          claim_id: c_Q98ddrzZC4jmhoioWMxKHG
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
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
        id: c_8qJW2EAEbXhx4VMPE3UkXy
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AciBSJFBtxaXuapF6uAecS
          claim_id: c_8qJW2EAEbXhx4VMPE3UkXy
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
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
        id: c_Z3ePr3pbTuxb29UKNe7Sca
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AEVWhErGWhnJCDdKbJ1QUq
          claim_id: c_Z3ePr3pbTuxb29UKNe7Sca
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-q_0oKWn1u2PLdyCjBAxmw
        subject_person_id: p_Dbnj6E8kMUFP6rJiZMSDLw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2LhmHMoaCfk1_g-BX-sdLI
          claim_id: c_-q_0oKWn1u2PLdyCjBAxmw
          source_id: s_L4DnLA3g6o2C8iwvdjkTk9
          stance: supports
          locator: CBDB 双向互证（子 王永年 ⇄ 父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_L4DnLA3g6o2C8iwvdjkTk9
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 386572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json
            external_identifier: CBDB:386572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dbnj6E8kMUFP6rJiZMSDLw
        status: active
        display_name: 王說
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qBN13wIXop_-FKnYOcIYZE
        subject_person_id: p_99h5oMti42oRmbFeRv71GH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U6U7iBU9o2X1cgCkLr7_Yd
          claim_id: c_qBN13wIXop_-FKnYOcIYZE
          source_id: s_ZHycc1ZTRscsA76wBW1Kcd
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王永年 ⇄ 高祖;四世祖 王固）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ZHycc1ZTRscsA76wBW1Kcd
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 24208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24208&o=json
            external_identifier: CBDB:24208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_99h5oMti42oRmbFeRv71GH
        status: active
        display_name: 王固
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_ERhxkQwfPTP0AsB1mrMiU3
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_25zytug1kFui17eu9pg9ot
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-DbyUYC8vWvB56QLyPbosl
          claim_id: c_ERhxkQwfPTP0AsB1mrMiU3
          source_id: s_eYEQPT2fXEVoBG5zNVBr99
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eYEQPT2fXEVoBG5zNVBr99
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 386574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json
            external_identifier: CBDB:386574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_25zytug1kFui17eu9pg9ot
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_i5D7R3LE6k52D8_Ppsywb1
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pC2CzgxCWVGh53LF21SEoo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j5DUZ7TRL38zW2Tzb1fH1a
          claim_id: c_i5D7R3LE6k52D8_Ppsywb1
          source_id: s_ndg5vqE5puN1JQdZ7K94Yd
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ndg5vqE5puN1JQdZ7K94Yd
            source_type: api_record
            title: 中国历代人物传记资料库：王興祖（CBDB 385913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385913&o=json
            external_identifier: CBDB:385913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pC2CzgxCWVGh53LF21SEoo
        status: active
        display_name: 王興祖
        merged_into_person_id: null
    - claim:
        id: c_jsDA65iwvIpSnxmAUcPSM9
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QPtFHPnLUxAqMigpNU1Ceu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BV-dulDv0sIEhK8j_NnUcz
          claim_id: c_jsDA65iwvIpSnxmAUcPSM9
          source_id: s_9miH9QKJjcNdQKDp9YCjnS
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9miH9QKJjcNdQKDp9YCjnS
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 385912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385912&o=json
            external_identifier: CBDB:385912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QPtFHPnLUxAqMigpNU1Ceu
        status: active
        display_name: 王光祖
        merged_into_person_id: null
    - claim:
        id: c_ovm0NcPqlVE50miEGV8TCT
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_r1Eok1MVUkgv9Psaq8rq3F
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VA_m0_9UKExHktVKIYC_kF
          claim_id: c_ovm0NcPqlVE50miEGV8TCT
          source_id: s_8ofiJ5JfznNAojkrW1ajzR
          stance: supports
          locator: 全宋文，卷 5677：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8ofiJ5JfznNAojkrW1ajzR
            source_type: api_record
            title: 中国历代人物传记资料库：王紹祖（CBDB 385911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385911&o=json
            external_identifier: CBDB:385911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r1Eok1MVUkgv9Psaq8rq3F
        status: active
        display_name: 王紹祖
        merged_into_person_id: null
    - claim:
        id: c_iDhJ5paV91jDylXHkDRSne
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6sLvRGgnDwAWz9RBiGMZ2t
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q9wa5UnwUjClEpXVjW8y_l
          claim_id: c_iDhJ5paV91jDylXHkDRSne
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: 全宋文，卷 5677：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6sLvRGgnDwAWz9RBiGMZ2t
        status: active
        display_name: 王勤禮
        merged_into_person_id: null
    - claim:
        id: c_ews3al3PCEnQ83qosRagQZ
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uj5CLmvfB4euhULD7fRHEY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8LYKG9rf1lMJF-fVHf7kh
          claim_id: c_ews3al3PCEnQ83qosRagQZ
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: CBDB 双向互证（孫 王寅 ⇄ 祖父 王永年）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_uj5CLmvfB4euhULD7fRHEY
        status: active
        display_name: 王寅
        merged_into_person_id: null
  other: []
---

# 王永年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永年 | accepted |
| birth.date | 1055年 | accepted |
| death.date | 1129年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Dbnj6E8kMUFP6rJiZMSDLw | 王說 | accepted |
| ancestors | p_99h5oMti42oRmbFeRv71GH | 王固 | accepted |
| descendants | p_25zytug1kFui17eu9pg9ot | 王寧 | accepted |
| descendants | p_pC2CzgxCWVGh53LF21SEoo | 王興祖 | accepted |
| descendants | p_QPtFHPnLUxAqMigpNU1Ceu | 王光祖 | accepted |
| descendants | p_r1Eok1MVUkgv9Psaq8rq3F | 王紹祖 | accepted |
| descendants | p_6sLvRGgnDwAWz9RBiGMZ2t | 王勤禮 | accepted |
| descendants | p_uj5CLmvfB4euhULD7fRHEY | 王寅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王固（CBDB 24208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24208&o=json)
- [中国历代人物传记资料库：王光祖（CBDB 385912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385912&o=json)
- [中国历代人物传记资料库：王寧（CBDB 386574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386574&o=json)
- [中国历代人物传记资料库：王紹祖（CBDB 385911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385911&o=json)
- [中国历代人物传记资料库：王說（CBDB 386572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386572&o=json)
- [中国历代人物传记资料库：王興祖（CBDB 385913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385913&o=json)
- [中国历代人物传记资料库：王永年（CBDB 17656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17656&o=json)
