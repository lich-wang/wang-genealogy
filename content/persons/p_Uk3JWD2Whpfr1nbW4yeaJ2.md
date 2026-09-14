---
schema: wang-person/v1
id: p_Uk3JWD2Whpfr1nbW4yeaJ2
status: active
merged_into: null
display_name: 王應辰
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t2Me6K6AX1qJCmjJuWXKLJ
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c4BBq1fxGhZR5YZjx2HYBi
          claim_id: c_t2Me6K6AX1qJCmjJuWXKLJ
          source_id: s_QJJRx7FMZix9Y7PKsPCiCx
          stance: supports
          locator: CBDB:205548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205548）
          source: &a1
            id: s_QJJRx7FMZix9Y7PKsPCiCx
            source_type: api_record
            title: 中国历代人物传记资料库：王應辰（CBDB 205548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205548&o=json
            external_identifier: CBDB:205548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_StQvZVjTugQYvutnmQusuB
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XF63k9BCVqLkXxNB6bhmro
          claim_id: c_StQvZVjTugQYvutnmQusuB
          source_id: s_QJJRx7FMZix9Y7PKsPCiCx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_55HiepPbJbkpDEwyPwaNP9
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應辰（生于1537年），明人物。明清進士進士，籍贯信陽，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 205548）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_swf0046201SYkkYX_IoJFF
          claim_id: c_55HiepPbJbkpDEwyPwaNP9
          source_id: s_QJJRx7FMZix9Y7PKsPCiCx
          stance: supports
          locator: CBDB:205548
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xoDOe5GfMbJKX8-InbQXd0
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aRn6IffrmgssVNouZo15nY
          claim_id: c_xoDOe5GfMbJKX8-InbQXd0
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P223hSkCaKXjWci8XgaC1u
            source_type: api_record
            title: 中国历代人物传记资料库：王省（CBDB 334990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334990&o=json
            external_identifier: CBDB:334990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WUPKdegwzMR62VcQ6XVX6T
        status: active
        display_name: 王省
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_l0GnDmfHw5geVpH_ZH9x-x
        subject_person_id: p_4MtUEXAzyRr4Xzwx6MWxEM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9w3Ebs9MvO5rh5FSLkzFV
          claim_id: c_l0GnDmfHw5geVpH_ZH9x-x
          source_id: s_3VyLoTaGXFpsVUm2YkMDJQ
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3VyLoTaGXFpsVUm2YkMDJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王朝良（CBDB 334989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334989&o=json
            external_identifier: CBDB:334989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4MtUEXAzyRr4Xzwx6MWxEM
        status: active
        display_name: 王朝良
        merged_into_person_id: null
    - claim:
        id: c_nKblTNbjp2GvKpKSRjRtLz
        subject_person_id: p_xt7Rv4oxxKPySid4gC11sc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XlGMGTbTOJT_52gVhYYrw5
          claim_id: c_nKblTNbjp2GvKpKSRjRtLz
          source_id: s_Sp4QQk9F6ThMcS9rDbUEzN
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Sp4QQk9F6ThMcS9rDbUEzN
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 334988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334988&o=json
            external_identifier: CBDB:334988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xt7Rv4oxxKPySid4gC11sc
        status: active
        display_name: 王訓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_3haywDKPo0zEZ26de5D1-E
        subject_person_id: p_5CcJvT8BLcp1KLWTfPZwCq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_liT75Ukb7gaRd24v0htjyS
          claim_id: c_3haywDKPo0zEZ26de5D1-E
          source_id: s_1Lh2R7Kbo7BjnIPmjzCTX6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205548 王應辰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Lh2R7Kbo7BjnIPmjzCTX6
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 334994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334994&o=json
            external_identifier: CBDB:334994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CcJvT8BLcp1KLWTfPZwCq
        status: active
        display_name: 王應期
        merged_into_person_id: null
    - claim:
        id: c_Q9SMMzAHke4hTqkWkony71
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yh8c2xSCHG3efoW3KFKu4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLj-C0HCbrxLCPcqDRr-Ld
          claim_id: c_Q9SMMzAHke4hTqkWkony71
          source_id: s_kyFRCKPTapt0h9OZldHly4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205548 王應辰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kyFRCKPTapt0h9OZldHly4
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 334993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json
            external_identifier: CBDB:334993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yh8c2xSCHG3efoW3KFKu4e
        status: active
        display_name: 王應元
        merged_into_person_id: null
---

# 王應辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應辰 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | 王應辰（生于1537年），明人物。明清進士進士，籍贯信陽，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 205548） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WUPKdegwzMR62VcQ6XVX6T | 王省 | accepted |
| ancestors | p_4MtUEXAzyRr4Xzwx6MWxEM | 王朝良 | accepted |
| ancestors | p_xt7Rv4oxxKPySid4gC11sc | 王訓 | accepted |
| other | p_5CcJvT8BLcp1KLWTfPZwCq | 王應期 | accepted |
| other | p_yh8c2xSCHG3efoW3KFKu4e | 王應元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝良（CBDB 334989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334989&o=json)
- [中国历代人物传记资料库：王省（CBDB 334990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334990&o=json)
- [中国历代人物传记资料库：王訓（CBDB 334988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334988&o=json)
- [中国历代人物传记资料库：王應辰（CBDB 205548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205548&o=json)
- [中国历代人物传记资料库：王應期（CBDB 334994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334994&o=json)
- [中国历代人物传记资料库：王應元（CBDB 334993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json)
