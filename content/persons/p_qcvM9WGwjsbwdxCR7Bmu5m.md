---
schema: wang-person/v1
id: p_qcvM9WGwjsbwdxCR7Bmu5m
status: active
merged_into: null
display_name: 王志廣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vZvS8Qx8AXtEBaANTxduis
        subject_person_id: p_qcvM9WGwjsbwdxCR7Bmu5m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fDpsEcN1SYo4t3L9D5ZH9c
          claim_id: c_vZvS8Qx8AXtEBaANTxduis
          source_id: s_z7GXVWywKHUh4hWASfXiEa
          stance: supports
          locator: CBDB:209007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209007）
          source: &a1
            id: s_z7GXVWywKHUh4hWASfXiEa
            source_type: api_record
            title: 中国历代人物传记资料库：王志廣（CBDB 209007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209007&o=json
            external_identifier: CBDB:209007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nJeWVD14sMwREm5P9xLUgi
        subject_person_id: p_qcvM9WGwjsbwdxCR7Bmu5m
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
        - id: cs_2xnd67QPMKoKSJLf7MDvys
          claim_id: c_nJeWVD14sMwREm5P9xLUgi
          source_id: s_z7GXVWywKHUh4hWASfXiEa
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
  descendants: []
  other: []
---

# 王志廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志廣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志廣（CBDB 209007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209007&o=json)
