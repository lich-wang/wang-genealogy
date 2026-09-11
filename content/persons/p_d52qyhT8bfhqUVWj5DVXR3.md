---
schema: wang-person/v1
id: p_d52qyhT8bfhqUVWj5DVXR3
status: active
merged_into: null
display_name: 王丹林
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DzsgE7D4LCj4NK9fWYq4Sm
        subject_person_id: p_d52qyhT8bfhqUVWj5DVXR3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QGEEv5atPqaa3Zu9ocm9He
          claim_id: c_DzsgE7D4LCj4NK9fWYq4Sm
          source_id: s_JuZuKRm5m6e22SdugkxDaN
          stance: supports
          locator: CBDB:700977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700977）
          source: &a1
            id: s_JuZuKRm5m6e22SdugkxDaN
            source_type: api_record
            title: 中国历代人物传记资料库：王丹林（CBDB 700977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700977&o=json
            external_identifier: CBDB:700977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yL9Mzu3M4Tnux9HX7BeAcq
        subject_person_id: p_d52qyhT8bfhqUVWj5DVXR3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王丹林，清人物。籍贯錢塘，身份为詩人、工於文，入仕貢生: 拔貢，曾任中書舍人。（中国历代人物传记资料库 CBDB 700977）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SB5JPxp62os58ICTLsNwFt
          claim_id: c_yL9Mzu3M4Tnux9HX7BeAcq
          source_id: s_JuZuKRm5m6e22SdugkxDaN
          stance: supports
          locator: CBDB:700977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cgr8q2Jq40cyReTRTdQVp1
        subject_person_id: p_d52qyhT8bfhqUVWj5DVXR3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KxFfNRE66F6ARrWit1GcZu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AmkA2Rj7HZ0ny4rNx2T3nY
          claim_id: c_cgr8q2Jq40cyReTRTdQVp1
          source_id: s_JuZuKRm5m6e22SdugkxDaN
          stance: supports
          locator: 錢塘縣志，lgid=219775：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KxFfNRE66F6ARrWit1GcZu
        status: active
        display_name: 王宸儁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王丹林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丹林 | accepted |
| bio.summary | 王丹林，清人物。籍贯錢塘，身份为詩人、工於文，入仕貢生: 拔貢，曾任中書舍人。（中国历代人物传记资料库 CBDB 700977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_KxFfNRE66F6ARrWit1GcZu | 王宸儁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丹林（CBDB 700977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700977&o=json)
