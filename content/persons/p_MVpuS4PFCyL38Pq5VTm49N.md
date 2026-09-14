---
schema: wang-person/v1
id: p_MVpuS4PFCyL38Pq5VTm49N
status: active
merged_into: null
display_name: 王賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tU6eChxyxe3b3PaAP1T8pu
        subject_person_id: p_MVpuS4PFCyL38Pq5VTm49N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u99yc3xMx5sYp93GZzWoBT
          claim_id: c_tU6eChxyxe3b3PaAP1T8pu
          source_id: s_JxG7QSGC3knB4xgfRLCBg9
          stance: supports
          locator: CBDB:280992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280992）
          source: &a1
            id: s_JxG7QSGC3knB4xgfRLCBg9
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 280992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json
            external_identifier: CBDB:280992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wHNGcy4gaRJdbAHvdDKb9n
        subject_person_id: p_MVpuS4PFCyL38Pq5VTm49N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。正德十二年進士，籍贯寧夏左屯衛。（中国历代人物传记资料库 CBDB 280992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-buS7kZy0vF0urTIXGgxa0
          claim_id: c_wHNGcy4gaRJdbAHvdDKb9n
          source_id: s_JxG7QSGC3knB4xgfRLCBg9
          stance: supports
          locator: CBDB:280992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WwflexmIXgO8oxwjE9lVMK
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MVpuS4PFCyL38Pq5VTm49N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_doUnkCyTXcPwb_Ti2aSivP
          claim_id: c_WwflexmIXgO8oxwjE9lVMK
          source_id: s_ms7RBfxO2GdF2iLkB5jcHV
          stance: supports
          locator: CBDB：兄弟 王官（201950）之父／母 王文進
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王官 为同胞（CBDB 记「兄」），王官 之父／母即 王賓 之父／母。
          source:
            id: s_ms7RBfxO2GdF2iLkB5jcHV
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 280992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json
            external_identifier: CBDB:280992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        status: active
        display_name: 王文進
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_23QxS2Uq3G2qZwCahYcHt4
        subject_person_id: p_MVpuS4PFCyL38Pq5VTm49N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IcDfBo0TMTfZ5JAEgRrEZn
          claim_id: c_23QxS2Uq3G2qZwCahYcHt4
          source_id: s_ms7RBfxO2GdF2iLkB5jcHV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201950 王官）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ms7RBfxO2GdF2iLkB5jcHV
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 280992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json
            external_identifier: CBDB:280992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XJXudkaLuCHVbmiCeKBv45
        status: active
        display_name: 王官
        merged_into_person_id: null
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。正德十二年進士，籍贯寧夏左屯衛。（中国历代人物传记资料库 CBDB 280992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RQpo9Kr6EeUuDNSVEJ5Qs2 | 王文進 | accepted |
| other | p_XJXudkaLuCHVbmiCeKBv45 | 王官 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 280992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json)
