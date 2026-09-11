---
schema: wang-person/v1
id: p_sa7HcKM9Pqnx8VLSSn5ypv
status: active
merged_into: null
display_name: 王希魯
cbdb_id: 270646
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7PdmEJx12Hdcig6UhSqBKm
        subject_person_id: p_sa7HcKM9Pqnx8VLSSn5ypv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希魯，明人物。中国历代人物传记资料库（CBDB）以人物编号 270646 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_iM7cW_ct6E4Q4HYk8iWpjw
          claim_id: c_7PdmEJx12Hdcig6UhSqBKm
          source_id: s_DKBubW1t76f589MjsRkd85
          stance: supports
          locator: CBDB:270646
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DKBubW1t76f589MjsRkd85
            source_type: api_record
            title: 中国历代人物传记资料库：王希魯（CBDB 270646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270646&o=json
            external_identifier: CBDB:270646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ay9KjkA1qHCJ1WC4S6DQ27
        subject_person_id: p_sa7HcKM9Pqnx8VLSSn5ypv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zLbRA6jA5Bh6PRfUn7AaDt
          claim_id: c_ay9KjkA1qHCJ1WC4S6DQ27
          source_id: s_DKBubW1t76f589MjsRkd85
          stance: supports
          locator: CBDB:270646
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_DKBubW1t76f589MjsRkd85
            source_type: api_record
            title: 中国历代人物传记资料库：王希魯（CBDB 270646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270646&o=json
            external_identifier: CBDB:270646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Fjn0HTqeT-v_S4dfyGTpJi
        subject_person_id: p_sa7HcKM9Pqnx8VLSSn5ypv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ci07-B47NEgZ_KRhgOI7RJ
          claim_id: c_Fjn0HTqeT-v_S4dfyGTpJi
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CXUAh52abVRTJgP1MCCsKj
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 201331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json
            external_identifier: CBDB:201331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kuyuiJHgUznyGsvyFU7zw8
        status: active
        display_name: 王雲
        merged_into_person_id: null
  other: []
---

# 王希魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希魯，明人物。中国历代人物传记资料库（CBDB）以人物编号 270646 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王希魯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kuyuiJHgUznyGsvyFU7zw8 | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希魯（CBDB 270646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270646&o=json)
- [中国历代人物传记资料库：王雲（CBDB 201331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json)
