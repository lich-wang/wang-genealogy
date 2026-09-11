---
schema: wang-person/v1
id: p_xjifYg2kCZ8329T4F86wRS
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c7mrAggTTT1Ai9uw1HpZPj
        subject_person_id: p_xjifYg2kCZ8329T4F86wRS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VtYLB5xZ26BtqGGZW4U4gv
          claim_id: c_c7mrAggTTT1Ai9uw1HpZPj
          source_id: s_ZJsgDuJLsMzGbGSJhYLrrh
          stance: supports
          locator: CBDB:278790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278790）
          source: &a1
            id: s_ZJsgDuJLsMzGbGSJhYLrrh
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 278790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278790&o=json
            external_identifier: CBDB:278790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14rWrgSVtKMWpt1qVDuftK
        subject_person_id: p_xjifYg2kCZ8329T4F86wRS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 278790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VFjbSxK48aVZOMemCNaHx7
          claim_id: c_14rWrgSVtKMWpt1qVDuftK
          source_id: s_ZJsgDuJLsMzGbGSJhYLrrh
          stance: supports
          locator: CBDB:278790
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
  descendants:
    - claim:
        id: c_WxeYWL1yZkQK23P2N8HrOY
        subject_person_id: p_xjifYg2kCZ8329T4F86wRS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n26YLzbX64yuezo0KBQ5hM
          claim_id: c_WxeYWL1yZkQK23P2N8HrOY
          source_id: s_xjN2TJXyA6Vs3DyR5m6myd
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xjN2TJXyA6Vs3DyR5m6myd
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 126621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json
            external_identifier: CBDB:126621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kAYn8y3iQCatmSJGkXFLhh
        status: active
        display_name: 王紀
        merged_into_person_id: null
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 278790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kAYn8y3iQCatmSJGkXFLhh | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 278790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278790&o=json)
- [中国历代人物传记资料库：王紀（CBDB 126621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126621&o=json)
