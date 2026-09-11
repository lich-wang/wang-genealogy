---
schema: wang-person/v1
id: p_cXRa7bG2ZG81yvV85EDhup
status: active
merged_into: null
display_name: 王彥威
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mskH1hRqWbANHj56vNy8bn
        subject_person_id: p_cXRa7bG2ZG81yvV85EDhup
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R7LKYR17wa2286hm8rMVj5
          claim_id: c_mskH1hRqWbANHj56vNy8bn
          source_id: s_h7TRvUao5vxwBVxqwyWhYk
          stance: supports
          locator: CBDB:92060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92060）
          source: &a1
            id: s_h7TRvUao5vxwBVxqwyWhYk
            source_type: api_record
            title: 中国历代人物传记资料库：王彥威（CBDB 92060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92060&o=json
            external_identifier: CBDB:92060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AiZw7UzEJC7CSQz38ckXQX
        subject_person_id: p_cXRa7bG2ZG81yvV85EDhup
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 845年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KfUUy6MAX3sjQhnjYGPvd2
          claim_id: c_AiZw7UzEJC7CSQz38ckXQX
          source_id: s_h7TRvUao5vxwBVxqwyWhYk
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
        id: c_hm8iQnH76Hp8iYX65noA28
        subject_person_id: p_cXRa7bG2ZG81yvV85EDhup
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥威（卒于845年），唐人物。籍贯太原，身份为工於文，入仕明經，曾任祠部員外郎、弘文館學士、戶部侍郎。（中国历代人物传记资料库 CBDB 92060）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iqu5Fv-KnmClv3Qk-jSNzs
          claim_id: c_hm8iQnH76Hp8iYX65noA28
          source_id: s_h7TRvUao5vxwBVxqwyWhYk
          stance: supports
          locator: CBDB:92060
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
  other: []
---

# 王彥威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥威 | accepted |
| death.date | 845年 | accepted |
| bio.summary | 王彥威（卒于845年），唐人物。籍贯太原，身份为工於文，入仕明經，曾任祠部員外郎、弘文館學士、戶部侍郎。（中国历代人物传记资料库 CBDB 92060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥威（CBDB 92060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92060&o=json)
