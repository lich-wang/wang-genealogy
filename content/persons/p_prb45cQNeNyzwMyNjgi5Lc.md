---
schema: wang-person/v1
id: p_prb45cQNeNyzwMyNjgi5Lc
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QoYsu5EK8dBa7K75R5kLKa
        subject_person_id: p_prb45cQNeNyzwMyNjgi5Lc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NawPqGo8j382m5cVrUPVPZ
          claim_id: c_QoYsu5EK8dBa7K75R5kLKa
          source_id: s_LwBCru52ceCUmLWXzXx4oc
          stance: supports
          locator: CBDB:38088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38088）
          source: &a1
            id: s_LwBCru52ceCUmLWXzXx4oc
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 38088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38088&o=json
            external_identifier: CBDB:38088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DKf7szXJJSJc2QMw3ZeAHV
        subject_person_id: p_prb45cQNeNyzwMyNjgi5Lc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1137年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aWN2zVLDr69Z2zAw1BFjJz
          claim_id: c_DKf7szXJJSJc2QMw3ZeAHV
          source_id: s_LwBCru52ceCUmLWXzXx4oc
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
        id: c_1gga48oQowpcznzWKJ23zH
        subject_person_id: p_prb45cQNeNyzwMyNjgi5Lc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1194年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H4aUv7GM78n6Df8sTWRyPK
          claim_id: c_1gga48oQowpcznzWKJ23zH
          source_id: s_LwBCru52ceCUmLWXzXx4oc
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
        id: c_Mx5wLh2z98r1NUmiySJjdL
        subject_person_id: p_prb45cQNeNyzwMyNjgi5Lc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信（1137年—1194年），宋人物。籍贯麗水，入仕進士，曾任朝議大夫、門下省給事中、騎都尉。（中国历代人物传记资料库 CBDB 38088）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tzyX5oNnZZy1uPF2XHRjAM
          claim_id: c_Mx5wLh2z98r1NUmiySJjdL
          source_id: s_LwBCru52ceCUmLWXzXx4oc
          stance: supports
          locator: CBDB:38088
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-f21VcPL8fKvziVy7BKkqN
        subject_person_id: p_prb45cQNeNyzwMyNjgi5Lc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sHfXhaWYZQDACH6DJzomzR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t6r5jWOp77OsJslJe4owhj
          claim_id: c_-f21VcPL8fKvziVy7BKkqN
          source_id: s_NiPswBd-H_UC0TB8239pU8
          stance: supports
          locator: 宋人傳記資料索引(電子版)，792;794：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NiPswBd-H_UC0TB8239pU8
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王信妻)（CBDB 38094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38094&o=json
            external_identifier: CBDB:38094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sHfXhaWYZQDACH6DJzomzR
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| birth.date | 1137年 | accepted |
| death.date | 1194年 | accepted |
| bio.summary | 王信（1137年—1194年），宋人物。籍贯麗水，入仕進士，曾任朝議大夫、門下省給事中、騎都尉。（中国历代人物传记资料库 CBDB 38088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sHfXhaWYZQDACH6DJzomzR | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王信妻)（CBDB 38094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38094&o=json)
- [中国历代人物传记资料库：王信（CBDB 38088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38088&o=json)
