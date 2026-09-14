---
schema: wang-person/v1
id: p_uYDH5QbPuGyPSbDEXdTRFx
status: active
merged_into: null
display_name: 王勔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1M49f49svwYHcGmhhzMTtu
        subject_person_id: p_uYDH5QbPuGyPSbDEXdTRFx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q9DrD89vwzeFGX1sbfwuwh
          claim_id: c_1M49f49svwYHcGmhhzMTtu
          source_id: s_CcJAkiAQUJD7JuaFufriBW
          stance: supports
          locator: CBDB:92074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92074）
          source: &a1
            id: s_CcJAkiAQUJD7JuaFufriBW
            source_type: api_record
            title: 中国历代人物传记资料库：王勔（CBDB 92074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92074&o=json
            external_identifier: CBDB:92074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4cPxaDynwVhgv2HCj3n8TL
        subject_person_id: p_uYDH5QbPuGyPSbDEXdTRFx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 697年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYeVfMt3Zi9z3pGaBB4oPg
          claim_id: c_4cPxaDynwVhgv2HCj3n8TL
          source_id: s_CcJAkiAQUJD7JuaFufriBW
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
        id: c_fbFwb8sh5Ce4EPX5apWncF
        subject_person_id: p_uYDH5QbPuGyPSbDEXdTRFx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勔（卒于697年），唐人物。籍贯龍門，身份为工於文，曾任州刺史。（中国历代人物传记资料库 CBDB 92074）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cZcnb7Qj0ZiHcA3CpxSEH8
          claim_id: c_fbFwb8sh5Ce4EPX5apWncF
          source_id: s_CcJAkiAQUJD7JuaFufriBW
          stance: supports
          locator: CBDB:92074
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
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5JkkNcGe9QI3qevy1rVbek
        subject_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uYDH5QbPuGyPSbDEXdTRFx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Al7SAgQDzB6gsHbFOp2a1W
          claim_id: c_5JkkNcGe9QI3qevy1rVbek
          source_id: s_lMIAyIqn0ypYjz7YEc3DZB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 92074 王勔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lMIAyIqn0ypYjz7YEc3DZB
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UvT6rfvfyeQtGV2w2picuQ
        status: active
        display_name: 王勮
        merged_into_person_id: null
---

# 王勔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勔 | accepted |
| death.date | 697年 | accepted |
| bio.summary | 王勔（卒于697年），唐人物。籍贯龍門，身份为工於文，曾任州刺史。（中国历代人物传记资料库 CBDB 92074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_UvT6rfvfyeQtGV2w2picuQ | 王勮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勮（CBDB 92110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json)
- [中国历代人物传记资料库：王勔（CBDB 92074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92074&o=json)
