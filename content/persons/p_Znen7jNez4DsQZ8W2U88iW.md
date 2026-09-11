---
schema: wang-person/v1
id: p_Znen7jNez4DsQZ8W2U88iW
status: active
merged_into: null
display_name: 王會
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91CqugMdBrTkoq3x9q4cvH
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Na3bQ5BdFpuhHmD29eXA4K
          claim_id: c_91CqugMdBrTkoq3x9q4cvH
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
          stance: supports
          locator: CBDB:126770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126770）
          source: &a1
            id: s_XWs2hW8KEw5PjB3GA4cgkG
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 126770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126770&o=json
            external_identifier: CBDB:126770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v3bLyJ9ZN1KYwJLNz6AbWJ
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMPyXSYnqCPaeGKhKj7yj6
          claim_id: c_v3bLyJ9ZN1KYwJLNz6AbWJ
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
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
        id: c_ULnRTaAYUTCdWTz1fD8CxA
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XeYra5TMtZh7BaeYMfpdTn
          claim_id: c_ULnRTaAYUTCdWTz1fD8CxA
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
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
        id: c_WK6eyRkBJ7tfFKJBLBbSYT
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VwsuzLy4fPZecrUJtZHFAs
          claim_id: c_WK6eyRkBJ7tfFKJBLBbSYT
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
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
        id: c_-AyDHQMJiW0dnVYtwgzawX
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gqtOxnjoq7ciKrRghEHVlt
          claim_id: c_-AyDHQMJiW0dnVYtwgzawX
          source_id: s_PdAxWVS5S1LbYfiuHsZ3d4
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdAxWVS5S1LbYfiuHsZ3d4
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 306001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306001&o=json
            external_identifier: CBDB:306001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26uVgWbWAkUDcgWw8N6zSa
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| birth.date | 1518年 | accepted |
| death.date | 1595年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_26uVgWbWAkUDcgWw8N6zSa | 王良玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 126770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126770&o=json)
- [中国历代人物传记资料库：王良玉（CBDB 306001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306001&o=json)
