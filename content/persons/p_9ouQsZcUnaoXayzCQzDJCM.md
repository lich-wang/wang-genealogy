---
schema: wang-person/v1
id: p_9ouQsZcUnaoXayzCQzDJCM
status: active
merged_into: null
display_name: 王仲祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1QomcNRJ5Ss6d4SNUuzSbi
        subject_person_id: p_9ouQsZcUnaoXayzCQzDJCM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GsP2gY19W3f9uyy7Ba4D49
          claim_id: c_1QomcNRJ5Ss6d4SNUuzSbi
          source_id: s_SfWUQTDpfxn55YGEWHnCKa
          stance: supports
          locator: CBDB:231085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231085）
          source: &a1
            id: s_SfWUQTDpfxn55YGEWHnCKa
            source_type: api_record
            title: 中国历代人物传记资料库：王仲祥（CBDB 231085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231085&o=json
            external_identifier: CBDB:231085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJ34GHB94kvksmGjSsZvSq
        subject_person_id: p_9ouQsZcUnaoXayzCQzDJCM
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
        - id: cs_Gp6BpAMTHcvBwWMnei77Gr
          claim_id: c_uJ34GHB94kvksmGjSsZvSq
          source_id: s_SfWUQTDpfxn55YGEWHnCKa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_3U_VnvW1eg9k1Q1Z1eYmwA
        subject_person_id: p_9ouQsZcUnaoXayzCQzDJCM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j2vvBP8O7_xMG2-BzScY6q
          claim_id: c_3U_VnvW1eg9k1Q1Z1eYmwA
          source_id: s_Rma4qxGwFz8V88WW24kMWD
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rma4qxGwFz8V88WW24kMWD
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 207307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json
            external_identifier: CBDB:207307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9Ebxw9nqUzpjPj6LJw3JKY
        status: active
        display_name: 王用
        merged_into_person_id: null
  other: []
---

# 王仲祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲祥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_9Ebxw9nqUzpjPj6LJw3JKY | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用（CBDB 207307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207307&o=json)
- [中国历代人物传记资料库：王仲祥（CBDB 231085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231085&o=json)
