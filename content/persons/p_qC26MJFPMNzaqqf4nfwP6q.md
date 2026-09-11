---
schema: wang-person/v1
id: p_qC26MJFPMNzaqqf4nfwP6q
status: active
merged_into: null
display_name: 王立
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_euiwMK7yVADS4B2EDQcaTS
        subject_person_id: p_qC26MJFPMNzaqqf4nfwP6q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2rSkDvigGG22r34iGx1TMW
          claim_id: c_euiwMK7yVADS4B2EDQcaTS
          source_id: s_rbdmVTG16K8KkPeuwqZAsj
          stance: supports
          locator: CBDB:139105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139105）
          source: &a1
            id: s_rbdmVTG16K8KkPeuwqZAsj
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 139105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139105&o=json
            external_identifier: CBDB:139105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BeK2Wz1FVwHKQXqNqqPY2J
        subject_person_id: p_qC26MJFPMNzaqqf4nfwP6q
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 589年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_un9b8fEPbhWM1A4nAafJsF
          claim_id: c_BeK2Wz1FVwHKQXqNqqPY2J
          source_id: s_rbdmVTG16K8KkPeuwqZAsj
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
        id: c_MMstNPZB3py6GyXp4UYYo6
        subject_person_id: p_qC26MJFPMNzaqqf4nfwP6q
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 657年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7bc1k1LfbAjGegBLJF6zb
          claim_id: c_MMstNPZB3py6GyXp4UYYo6
          source_id: s_rbdmVTG16K8KkPeuwqZAsj
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
        id: c_YTckXGpZpSeGmFGc7Hrxo4
        subject_person_id: p_qC26MJFPMNzaqqf4nfwP6q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立（589年—657年），唐人物。籍贯太原，曾任縣丞、州刺史。（中国历代人物传记资料库 CBDB 139105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5VUrr3lVr55XEEJPrgYPUS
          claim_id: c_YTckXGpZpSeGmFGc7Hrxo4
          source_id: s_rbdmVTG16K8KkPeuwqZAsj
          stance: supports
          locator: CBDB:139105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aq-dxdxg3X5uLq1piR_zId
        subject_person_id: p_qC26MJFPMNzaqqf4nfwP6q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x16f93HfojM6PV2fk1u7Vo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LPQZaohworXcoC4-sHRenp
          claim_id: c_aq-dxdxg3X5uLq1piR_zId
          source_id: s_rbdmVTG16K8KkPeuwqZAsj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 39：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x16f93HfojM6PV2fk1u7Vo
        status: active
        display_name: 王玄辯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_23TT4Tmo4ZM312VzpUHra_
        subject_person_id: p_qC26MJFPMNzaqqf4nfwP6q
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_urWXsUYa7wShpvpw3xXBLd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shX7G5w_V9re1ey1O8R_I8
          claim_id: c_23TT4Tmo4ZM312VzpUHra_
          source_id: s_Oqbe_Udu8NXiYQuPUpqZ5G
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 39：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Oqbe_Udu8NXiYQuPUpqZ5G
            source_type: api_record
            title: 中国历代人物传记资料库：成氏(王立妻)（CBDB 147374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147374&o=json
            external_identifier: CBDB:147374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_urWXsUYa7wShpvpw3xXBLd
        status: active
        display_name: 成氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立 | accepted |
| birth.date | 589年 | accepted |
| death.date | 657年 | accepted |
| bio.summary | 王立（589年—657年），唐人物。籍贯太原，曾任縣丞、州刺史。（中国历代人物传记资料库 CBDB 139105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_x16f93HfojM6PV2fk1u7Vo | 王玄辯 | accepted |
| spouses | p_urWXsUYa7wShpvpw3xXBLd | 成氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：成氏(王立妻)（CBDB 147374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147374&o=json)
- [中国历代人物传记资料库：王立（CBDB 139105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139105&o=json)
