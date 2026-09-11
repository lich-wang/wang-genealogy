---
schema: wang-person/v1
id: p_WMDBx8YbaqrfbBxkSxgvG3
status: active
merged_into: null
display_name: 王和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v7pQDDBxdoGt7Kzx3hjb4e
        subject_person_id: p_WMDBx8YbaqrfbBxkSxgvG3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QtLCziLagQgF93KuHxAvCF
          claim_id: c_v7pQDDBxdoGt7Kzx3hjb4e
          source_id: s_UKUtwKLBnDAGgw2ofQRb8q
          stance: supports
          locator: CBDB:276172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276172）
          source: &a1
            id: s_UKUtwKLBnDAGgw2ofQRb8q
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 276172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276172&o=json
            external_identifier: CBDB:276172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2BMVejJLFB4HxVbba7xXGj
        subject_person_id: p_WMDBx8YbaqrfbBxkSxgvG3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和，明人物。正德六年進士，籍贯遷安，曾任巡檢。（中国历代人物传记资料库 CBDB 276172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RdmjOgU82urIEclFE7ZI6n
          claim_id: c_2BMVejJLFB4HxVbba7xXGj
          source_id: s_UKUtwKLBnDAGgw2ofQRb8q
          stance: supports
          locator: CBDB:276172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i7aXQD328K3EfdIe8Zai8a
        subject_person_id: p_xySe3nQRavCmmmxMiAe2Ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WMDBx8YbaqrfbBxkSxgvG3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lPYac0BRGn7l2Dx_E0nsUI
          claim_id: c_i7aXQD328K3EfdIe8Zai8a
          source_id: s_kGw8NrUwBZse4bkBcBkxJX
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第四十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_kGw8NrUwBZse4bkBcBkxJX
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 126587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126587&o=json
            external_identifier: CBDB:126587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xySe3nQRavCmmmxMiAe2Ua
        status: active
        display_name: 王政
        merged_into_person_id: null
  children:
    - claim:
        id: c_492CbsrHP6EVBnSl9pZGG2
        subject_person_id: p_WMDBx8YbaqrfbBxkSxgvG3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1kPwo9xT5TtA5YmLc4QpXm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5OBllKWtKR4-Z1POUIvip
          claim_id: c_492CbsrHP6EVBnSl9pZGG2
          source_id: s_kGw8NrUwBZse4bkBcBkxJX
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第四十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_1kPwo9xT5TtA5YmLc4QpXm
        status: active
        display_name: 王念
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和 | accepted |
| bio.summary | 王和，明人物。正德六年進士，籍贯遷安，曾任巡檢。（中国历代人物传记资料库 CBDB 276172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xySe3nQRavCmmmxMiAe2Ua | 王政 | accepted |
| children | p_1kPwo9xT5TtA5YmLc4QpXm | 王念 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和（CBDB 276172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276172&o=json)
- [中国历代人物传记资料库：王念（CBDB 126587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126587&o=json)
