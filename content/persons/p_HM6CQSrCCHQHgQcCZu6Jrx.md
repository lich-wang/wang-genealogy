---
schema: wang-person/v1
id: p_HM6CQSrCCHQHgQcCZu6Jrx
status: active
merged_into: null
display_name: 王道昇
cbdb_id: 231053
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jcVLNSWdSW8JVSsTqXu2Pa
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道昇，明人物。宣德八年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 231053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_g1mxczL928q1oga3cc5oBc
          claim_id: c_jcVLNSWdSW8JVSsTqXu2Pa
          source_id: s_XG8nM3AXwfV9rbQRDNvJ8u
          stance: supports
          locator: CBDB:231053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XG8nM3AXwfV9rbQRDNvJ8u
            source_type: api_record
            title: 中国历代人物传记资料库：王道昇（CBDB 231053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231053&o=json
            external_identifier: CBDB:231053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2MVDroSY1YP3Gup824yGb1
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3YiMKNqLAgdTvpLRKuHDKA
          claim_id: c_2MVDroSY1YP3Gup824yGb1
          source_id: s_XG8nM3AXwfV9rbQRDNvJ8u
          stance: supports
          locator: CBDB:231053
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CJ0oS-oJ0NrS-iNCL9s2TG
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_noqwuhOPSig3l84wBvOy6Z
          claim_id: c_CJ0oS-oJ0NrS-iNCL9s2TG
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uzW9Ddf4Rc2dppD7goBC2K
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 207304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json
            external_identifier: CBDB:207304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7j83XKHhJr8JnHARH8PeYg
        status: active
        display_name: 王弼
        merged_into_person_id: null
    - claim:
        id: c_eMAZssnZcTPuOjPucLMjQ1
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2nxbCWYXSDxe4gToF39v3P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8J9gaDmmxMAPXssKpXBrQp
          claim_id: c_eMAZssnZcTPuOjPucLMjQ1
          source_id: s_fyqBD4SzxqPVL-NAWmzHgn
          stance: supports
          locator: CBDB：兄弟 王弼（207304）之父／母 王道昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王徵 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王徵 之父／母。
          source:
            id: s_fyqBD4SzxqPVL-NAWmzHgn
            source_type: api_record
            title: 中国历代人物传记资料库：王徵（CBDB 231061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231061&o=json
            external_identifier: CBDB:231061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2nxbCWYXSDxe4gToF39v3P
        status: active
        display_name: 王徵
        merged_into_person_id: null
    - claim:
        id: c_Qa-69sCN9P0WMVTvp6gp2y
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bhs9Mhf-X2TrLqowk2_inS
          claim_id: c_Qa-69sCN9P0WMVTvp6gp2y
          source_id: s_GhlDsuDez8uevb65FZvl-n
          stance: supports
          locator: CBDB：兄弟 王弼（207304）之父／母 王道昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王政 之父／母。
          source:
            id: s_GhlDsuDez8uevb65FZvl-n
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 231062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json
            external_identifier: CBDB:231062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eFhKzbESVxhCuJGXAkMcL9
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_cPwHePuUunpSyIdAquoJHV
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_exfRAuxdf9ZMaACm8m5f7X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iFYAt4MHcPiSALxgT-yCvK
          claim_id: c_cPwHePuUunpSyIdAquoJHV
          source_id: s_hE58LlQGQHTfRyxOMFHJVU
          stance: supports
          locator: CBDB：兄弟 王弼（207304）之父／母 王道昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王徹 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王徹 之父／母。
          source:
            id: s_hE58LlQGQHTfRyxOMFHJVU
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 231060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231060&o=json
            external_identifier: CBDB:231060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_exfRAuxdf9ZMaACm8m5f7X
        status: active
        display_name: 王徹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道昇，明人物。宣德八年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 231053） | accepted |
| name.primary | 王道昇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7j83XKHhJr8JnHARH8PeYg | 王弼 | accepted |
| children | p_2nxbCWYXSDxe4gToF39v3P | 王徵 | accepted |
| children | p_eFhKzbESVxhCuJGXAkMcL9 | 王政 | accepted |
| children | p_exfRAuxdf9ZMaACm8m5f7X | 王徹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 207304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json)
- [中国历代人物传记资料库：王徹（CBDB 231060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231060&o=json)
- [中国历代人物传记资料库：王道昇（CBDB 231053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231053&o=json)
- [中国历代人物传记资料库：王政（CBDB 231062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json)
- [中国历代人物传记资料库：王徵（CBDB 231061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231061&o=json)
