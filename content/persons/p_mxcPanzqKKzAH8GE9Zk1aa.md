---
schema: wang-person/v1
id: p_mxcPanzqKKzAH8GE9Zk1aa
status: active
merged_into: null
display_name: 王絹
cbdb_id: 326384
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skHyRUMghHrCKtRKPfimjH
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絹，明人物。中国历代人物传记资料库（CBDB）以人物编号 326384 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_U5duHwYezHmZUsT79ZmbN-
          claim_id: c_skHyRUMghHrCKtRKPfimjH
          source_id: s_nTiYTngDLihHnV22tBv72F
          stance: supports
          locator: CBDB:326384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_nTiYTngDLihHnV22tBv72F
            source_type: api_record
            title: 中国历代人物传记资料库：王絹（CBDB 326384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326384&o=json
            external_identifier: CBDB:326384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m3pxEZ7YmnFxnqvWuAUiXN
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fPL53g9KPcM2akZ9wgoB5J
          claim_id: c_m3pxEZ7YmnFxnqvWuAUiXN
          source_id: s_nTiYTngDLihHnV22tBv72F
          stance: supports
          locator: CBDB:326384
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_nTiYTngDLihHnV22tBv72F
            source_type: api_record
            title: 中国历代人物传记资料库：王絹（CBDB 326384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326384&o=json
            external_identifier: CBDB:326384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CSMT1j_v7bvgK_amNFF85p
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ig7hMt2svPC3_kBOkv46J9
          claim_id: c_CSMT1j_v7bvgK_amNFF85p
          source_id: s_f2q9x9g9GZZTgBnVm6ZD6i
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f2q9x9g9GZZTgBnVm6ZD6i
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 204956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204956&o=json
            external_identifier: CBDB:204956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王絹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王絹，明人物。中国历代人物传记资料库（CBDB）以人物编号 326384 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王絹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王絹（CBDB 326384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326384&o=json)
- [中国历代人物传记资料库：王宜（CBDB 204956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204956&o=json)
