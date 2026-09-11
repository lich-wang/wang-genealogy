---
schema: wang-person/v1
id: p_q3A2DQQyYmMWunT6RPJCVP
status: active
merged_into: null
display_name: 王晊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BgYQLxzVWFfgQGM671FcaY
        subject_person_id: p_q3A2DQQyYmMWunT6RPJCVP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6iZKaqN7obwW9Yb1XfK8yF
          claim_id: c_BgYQLxzVWFfgQGM671FcaY
          source_id: s_dUi5CzzAv1LGHHjxjEsNHd
          stance: supports
          locator: CBDB:161418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（161418）
          source: &a1
            id: s_dUi5CzzAv1LGHHjxjEsNHd
            source_type: api_record
            title: 中国历代人物传记资料库：王晊（CBDB 161418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161418&o=json
            external_identifier: CBDB:161418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RJ87ipLkMLfRhr28AkBbn4
        subject_person_id: p_q3A2DQQyYmMWunT6RPJCVP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晊，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 161418）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CIwYSfTkZfPv7WP3g3Eu7A
          claim_id: c_RJ87ipLkMLfRhr28AkBbn4
          source_id: s_dUi5CzzAv1LGHHjxjEsNHd
          stance: supports
          locator: CBDB:161418
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NQhdzr2yDnG5p9H4wKj3XF
        subject_person_id: p_4MiQ5yRpJtsSS8YQbGVkEu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3A2DQQyYmMWunT6RPJCVP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eqMOqLMDHe2NhHjzuLDG2S
          claim_id: c_NQhdzr2yDnG5p9H4wKj3XF
          source_id: s_c7aYKS18GVFUsKojakZVdW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhonghe002：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c7aYKS18GVFUsKojakZVdW
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 161413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161413&o=json
            external_identifier: CBDB:161413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4MiQ5yRpJtsSS8YQbGVkEu
        status: active
        display_name: 王弁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晊 | accepted |
| bio.summary | 王晊，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 161418） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4MiQ5yRpJtsSS8YQbGVkEu | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 161413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161413&o=json)
- [中国历代人物传记资料库：王晊（CBDB 161418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161418&o=json)
