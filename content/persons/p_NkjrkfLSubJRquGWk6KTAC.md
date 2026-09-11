---
schema: wang-person/v1
id: p_NkjrkfLSubJRquGWk6KTAC
status: active
merged_into: null
display_name: 王祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEezg9Tc4mqnZdzbWm9aK5
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qXzEYmrmUEFhKgmULfyc1M
          claim_id: c_iEezg9Tc4mqnZdzbWm9aK5
          source_id: s_b2aRZZg64z4mZCMpV7GCxE
          stance: supports
          locator: CBDB:266762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266762）
          source: &a1
            id: s_b2aRZZg64z4mZCMpV7GCxE
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 266762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266762&o=json
            external_identifier: CBDB:266762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeKLpS8oL9NVCbs5cy53aF
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
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
        - id: cs_ZZTmHmVUXJDCjY6mtUi1ow
          claim_id: c_WeKLpS8oL9NVCbs5cy53aF
          source_id: s_b2aRZZg64z4mZCMpV7GCxE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_voyUgdYB-wMCqg7GvQTr82
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKtPEZYLBxGrUB4Vrq2JEV
          claim_id: c_voyUgdYB-wMCqg7GvQTr82
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nsNS4tYiMyfHMLUzeivoSe
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 126892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json
            external_identifier: CBDB:126892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJMiNXJSvn8avCPNUFL6Jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aJMiNXJSvn8avCPNUFL6Jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 126892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json)
- [中国历代人物传记资料库：王祚（CBDB 266762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266762&o=json)
