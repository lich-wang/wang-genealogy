---
schema: wang-person/v1
id: p_R89BoJ7zW7kBGSAZbJKZbQ
status: active
merged_into: null
display_name: 王復
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_55Mei1W1yK39RC4NoiGB1H
        subject_person_id: p_R89BoJ7zW7kBGSAZbJKZbQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZyZVvkte8nAcM5UCpTjvq4
          claim_id: c_55Mei1W1yK39RC4NoiGB1H
          source_id: s_ibq7AWNLFH7rAJWJ3s4JtR
          stance: supports
          locator: CBDB:100822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100822）
          source: &a1
            id: s_ibq7AWNLFH7rAJWJ3s4JtR
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 100822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100822&o=json
            external_identifier: CBDB:100822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VT9E4mH4Yj8kZ1PzcNvy8C
        subject_person_id: p_R89BoJ7zW7kBGSAZbJKZbQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1226年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7vRNSDERbDGENFq3sEDECX
          claim_id: c_VT9E4mH4Yj8kZ1PzcNvy8C
          source_id: s_ibq7AWNLFH7rAJWJ3s4JtR
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
        id: c_kr24LuuSujGZ6MKVQQtjkG
        subject_person_id: p_R89BoJ7zW7kBGSAZbJKZbQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1289年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y9fzDDWrYcRJFT7T2fuC5h
          claim_id: c_kr24LuuSujGZ6MKVQQtjkG
          source_id: s_ibq7AWNLFH7rAJWJ3s4JtR
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
        id: c_ugwtHQVseDnSRZKVp3r229
        subject_person_id: p_R89BoJ7zW7kBGSAZbJKZbQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復（1226年—1289年），元人物。籍贯滄州，曾任按察使、散府知府或府尹、宣慰使司副使。（中国历代人物传记资料库 CBDB 100822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kRIYZG_DTIXqVaQZWeohE3
          claim_id: c_ugwtHQVseDnSRZKVp3r229
          source_id: s_ibq7AWNLFH7rAJWJ3s4JtR
          stance: supports
          locator: CBDB:100822
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UXDWZIkiTP3uNpFobYq5g0
        subject_person_id: p_DyTGzzspjVWik15hHbyM4w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R89BoJ7zW7kBGSAZbJKZbQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uw6wRR9eapv4NJ_ZdMu4L1
          claim_id: c_UXDWZIkiTP3uNpFobYq5g0
          source_id: s_zw8iFbtJgjEMN5ytSjeNUP
          stance: supports
          locator: 元人傳記資料索引，641：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zw8iFbtJgjEMN5ytSjeNUP
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 101253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101253&o=json
            external_identifier: CBDB:101253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DyTGzzspjVWik15hHbyM4w
        status: active
        display_name: 王昌齡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1226年 | accepted |
| death.date | 1289年 | accepted |
| bio.summary | 王復（1226年—1289年），元人物。籍贯滄州，曾任按察使、散府知府或府尹、宣慰使司副使。（中国历代人物传记资料库 CBDB 100822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DyTGzzspjVWik15hHbyM4w | 王昌齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌齡（CBDB 101253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101253&o=json)
- [中国历代人物传记资料库：王復（CBDB 100822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100822&o=json)
