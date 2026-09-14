---
schema: wang-person/v1
id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
status: active
merged_into: null
display_name: 王文進
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RSNQj2GmKbC5xd44ZBbnL3
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QH4wLxm1WK5AfMNG5L3fyH
          claim_id: c_RSNQj2GmKbC5xd44ZBbnL3
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
          stance: supports
          locator: CBDB:280988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280988）
          source: &a1
            id: s_nhVzFWj9zSZEt9UDw1GYD7
            source_type: api_record
            title: 中国历代人物传记资料库：王文進（CBDB 280988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280988&o=json
            external_identifier: CBDB:280988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_81mAseS3CFXdvRKMwPm7Re
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文進，明人物。正德十二年進士，籍贯寧夏左屯衛，曾任主簿。（中国历代人物传记资料库 CBDB 280988）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aOYiSGWA_k-ReJNKiFVDI1
          claim_id: c_81mAseS3CFXdvRKMwPm7Re
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
          stance: supports
          locator: CBDB:280988
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-R72gV9C361EQCzsADpPrG
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8Wb7itaolHGz1EDWLiAcx
          claim_id: c_-R72gV9C361EQCzsADpPrG
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XJXudkaLuCHVbmiCeKBv45
        status: active
        display_name: 王官
        merged_into_person_id: null
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
        id: p_MVpuS4PFCyL38Pq5VTm49N
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_AQCyVF2hKMwyYWcVl8Z_IM
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vdMXD4CvUETGDTV3fm6nG8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IbKeGr7IYLFT5BC9EdAZjd
          claim_id: c_AQCyVF2hKMwyYWcVl8Z_IM
          source_id: s_WdGfmF0zDobw7ASn9_M1Ab
          stance: supports
          locator: CBDB：兄弟 王官（201950）之父／母 王文進
          quotation: null
          interpretation_note: 由兄弟关系推断：王寀 与 王官 为同胞（CBDB 记「兄」），王官 之父／母即 王寀 之父／母。
          source:
            id: s_WdGfmF0zDobw7ASn9_M1Ab
            source_type: api_record
            title: 中国历代人物传记资料库：王寀（CBDB 280991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280991&o=json
            external_identifier: CBDB:280991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vdMXD4CvUETGDTV3fm6nG8
        status: active
        display_name: 王寀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文進 | accepted |
| bio.summary | 王文進，明人物。正德十二年進士，籍贯寧夏左屯衛，曾任主簿。（中国历代人物传记资料库 CBDB 280988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XJXudkaLuCHVbmiCeKBv45 | 王官 | accepted |
| children | p_MVpuS4PFCyL38Pq5VTm49N | 王賓 | accepted |
| children | p_vdMXD4CvUETGDTV3fm6nG8 | 王寀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 280992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280992&o=json)
- [中国历代人物传记资料库：王寀（CBDB 280991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280991&o=json)
- [中国历代人物传记资料库：王文進（CBDB 280988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280988&o=json)
