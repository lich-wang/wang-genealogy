---
schema: wang-person/v1
id: p_6xoAfi4stB7L5fGhTVd9QP
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_241f3UKEL2oxuQSBSKVNZM
        subject_person_id: p_6xoAfi4stB7L5fGhTVd9QP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bSTvg2rzxZrpR6vzK5QGmc
          claim_id: c_241f3UKEL2oxuQSBSKVNZM
          source_id: s_dJYzD89r5S1HLk95XsdFQY
          stance: supports
          locator: CBDB:693013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693013）
          source: &a1
            id: s_dJYzD89r5S1HLk95XsdFQY
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 693013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693013&o=json
            external_identifier: CBDB:693013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yhKGDbi82JHmMpRFF4ZsW4
        subject_person_id: p_6xoAfi4stB7L5fGhTVd9QP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王綱，清人物。籍贯海鹽，身份为詩人、藏書家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693013）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TO4hSs28o-p9pfNoqoRsbA
          claim_id: c_yhKGDbi82JHmMpRFF4ZsW4
          source_id: s_dJYzD89r5S1HLk95XsdFQY
          stance: supports
          locator: CBDB:693013
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
        id: c_5YSCDKr6_wv-RfKzrIxM3k
        subject_person_id: p_6xoAfi4stB7L5fGhTVd9QP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oVdTag1HXndJGk8qNKHaGT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWMIIvUrX13voNJFP04cKI
          claim_id: c_5YSCDKr6_wv-RfKzrIxM3k
          source_id: s_zEJWZh7UKhhQdiHx3rihx8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 693012 王純）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zEJWZh7UKhhQdiHx3rihx8
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 693013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693013&o=json
            external_identifier: CBDB:693013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oVdTag1HXndJGk8qNKHaGT
        status: active
        display_name: 王純
        merged_into_person_id: null
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，清人物。籍贯海鹽，身份为詩人、藏書家，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 693013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_oVdTag1HXndJGk8qNKHaGT | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 693013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693013&o=json)
