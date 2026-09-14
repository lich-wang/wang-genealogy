---
schema: wang-person/v1
id: p_7qYVpNXr3rJeGDwdypL9Mb
status: active
merged_into: null
display_name: 王德純
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4b7VJk5U7vYpfMa8Y6KpvT
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A6KQ9Aeb3rRKwDx3mEhiLP
          claim_id: c_4b7VJk5U7vYpfMa8Y6KpvT
          source_id: s_rcdfHky1Q4AUJutcJkZsRY
          stance: supports
          locator: CBDB:323748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323748）
          source: &a1
            id: s_rcdfHky1Q4AUJutcJkZsRY
            source_type: api_record
            title: 中国历代人物传记资料库：王德純（CBDB 323748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323748&o=json
            external_identifier: CBDB:323748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kGunay1JDGAmDQNMPjaKtG
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德純，明人物。嘉靖三十八年進士，籍贯清苑，曾任縣丞。（中国历代人物传记资料库 CBDB 323748）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bgwwujK0a-xbJcTYPbAxib
          claim_id: c_kGunay1JDGAmDQNMPjaKtG
          source_id: s_rcdfHky1Q4AUJutcJkZsRY
          stance: supports
          locator: CBDB:323748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Vab8uOvRywmp23WiJ0gOMH
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ei7eg6CfhQzNBCUMYZdXN
          claim_id: c_Vab8uOvRywmp23WiJ0gOMH
          source_id: s_rcdfHky1Q4AUJutcJkZsRY
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第七十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ck5AXM5Fx2KaAGeW6x29ur
        status: active
        display_name: 王闐
        merged_into_person_id: null
    - claim:
        id: c_PyIvNCoDNrhl5p9gQedWFi
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ByfedhZMkQZ2osvi5pfvXp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-an1RYWy4QTGP1mjuLEZ1L
          claim_id: c_PyIvNCoDNrhl5p9gQedWFi
          source_id: s_2G_bmNmmHVkpldpmLe5aOR
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王閔 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王閔 之父／母。
          source:
            id: s_2G_bmNmmHVkpldpmLe5aOR
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 323758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323758&o=json
            external_identifier: CBDB:323758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ByfedhZMkQZ2osvi5pfvXp
        status: active
        display_name: 王閔
        merged_into_person_id: null
    - claim:
        id: c_qbggB7Ualg-zsZ3frhBa2Q
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ECAXe9vm33fKhmKg8C8s5P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5a13NHJvGMTtzZUKExHPfx
          claim_id: c_qbggB7Ualg-zsZ3frhBa2Q
          source_id: s_6pKUJwr6WNQ2WjOmXhfpx-
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王閥 与 王闐 为同胞（CBDB 记「弟」），王闐 之父／母即 王閥 之父／母。
          source:
            id: s_6pKUJwr6WNQ2WjOmXhfpx-
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 323754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json
            external_identifier: CBDB:323754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ECAXe9vm33fKhmKg8C8s5P
        status: active
        display_name: 王閥
        merged_into_person_id: null
    - claim:
        id: c_Lvw4pPS8Hcy1w0opVqSgyz
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MSCyNBhmLhN1rocpXFaZoL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLHGH4_Kz5vzV1RcF8ba5h
          claim_id: c_Lvw4pPS8Hcy1w0opVqSgyz
          source_id: s_bUKtWhvPFeXinpj1yJ8HbZ
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闙 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王闙 之父／母。
          source:
            id: s_bUKtWhvPFeXinpj1yJ8HbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王闙（CBDB 323755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json
            external_identifier: CBDB:323755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MSCyNBhmLhN1rocpXFaZoL
        status: active
        display_name: 王闙
        merged_into_person_id: null
    - claim:
        id: c_VuSKq02jRyyVYMEsnfBc5F
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V91UZRWyAuB7hrJMpTkccY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QE9itcV5cX-1l2VNyfyfsc
          claim_id: c_VuSKq02jRyyVYMEsnfBc5F
          source_id: s_JakK26WQKUnAG7haLB7NzB
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王問 与 王闐 为同胞（CBDB 记「弟」），王闐 之父／母即 王問 之父／母。
          source:
            id: s_JakK26WQKUnAG7haLB7NzB
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 323753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323753&o=json
            external_identifier: CBDB:323753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V91UZRWyAuB7hrJMpTkccY
        status: active
        display_name: 王問
        merged_into_person_id: null
    - claim:
        id: c_Ikft9yoen11Sc4HxXB_Kea
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvnWV7trlN3-66kvuc4hB6
          claim_id: c_Ikft9yoen11Sc4HxXB_Kea
          source_id: s_YoObEK8IlHTz34Ux2gjoZT
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闕 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王闕 之父／母。
          source:
            id: s_YoObEK8IlHTz34Ux2gjoZT
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 323757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json
            external_identifier: CBDB:323757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dwGp6jGuD9i2ghEHfvT8CV
        status: active
        display_name: 王闕
        merged_into_person_id: null
    - claim:
        id: c_cCZnnZa_7sHfTOzwr5slaf
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o5TL75x34Lta8LsAnkS1c1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHr-awN5G1vP0-Wb_UYfQg
          claim_id: c_cCZnnZa_7sHfTOzwr5slaf
          source_id: s_YZ9-1VUmSHoC47jvJ_yzdF
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王闉 与 王闐 为同胞（CBDB 记「弟」），王闐 之父／母即 王闉 之父／母。
          source:
            id: s_YZ9-1VUmSHoC47jvJ_yzdF
            source_type: api_record
            title: 中国历代人物传记资料库：王闉（CBDB 323751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json
            external_identifier: CBDB:323751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o5TL75x34Lta8LsAnkS1c1
        status: active
        display_name: 王闉
        merged_into_person_id: null
    - claim:
        id: c_Gf9vmRGCkUPeD0MXO1gSyN
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p2gM1mATmRAMnvVgUtfH2R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P5gnc9yvXfDqiYKV5pDQds
          claim_id: c_Gf9vmRGCkUPeD0MXO1gSyN
          source_id: s_Y7IMKw8qwmIGbf2yACNhWi
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王開 与 王闐 为同胞（CBDB 记「兄」），王闐 之父／母即 王開 之父／母。
          source:
            id: s_Y7IMKw8qwmIGbf2yACNhWi
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 323756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json
            external_identifier: CBDB:323756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p2gM1mATmRAMnvVgUtfH2R
        status: active
        display_name: 王開
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德純 | accepted |
| bio.summary | 王德純，明人物。嘉靖三十八年進士，籍贯清苑，曾任縣丞。（中国历代人物传记资料库 CBDB 323748） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ck5AXM5Fx2KaAGeW6x29ur | 王闐 | accepted |
| children | p_ByfedhZMkQZ2osvi5pfvXp | 王閔 | accepted |
| children | p_ECAXe9vm33fKhmKg8C8s5P | 王閥 | accepted |
| children | p_MSCyNBhmLhN1rocpXFaZoL | 王闙 | accepted |
| children | p_V91UZRWyAuB7hrJMpTkccY | 王問 | accepted |
| children | p_dwGp6jGuD9i2ghEHfvT8CV | 王闕 | accepted |
| children | p_o5TL75x34Lta8LsAnkS1c1 | 王闉 | accepted |
| children | p_p2gM1mATmRAMnvVgUtfH2R | 王開 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德純（CBDB 323748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323748&o=json)
- [中国历代人物传记资料库：王閥（CBDB 323754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json)
- [中国历代人物传记资料库：王開（CBDB 323756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323756&o=json)
- [中国历代人物传记资料库：王閔（CBDB 323758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323758&o=json)
- [中国历代人物传记资料库：王闙（CBDB 323755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323755&o=json)
- [中国历代人物传记资料库：王闕（CBDB 323757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json)
- [中国历代人物传记资料库：王問（CBDB 323753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323753&o=json)
- [中国历代人物传记资料库：王闉（CBDB 323751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323751&o=json)
