---
schema: wang-person/v1
id: p_DRV1HsEBatah9fyUGYScze
status: active
merged_into: null
display_name: 王忱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YCoQzwBvFpMow1urSdPDEk
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4iXWShMBkb47wCmoXN7A18
          claim_id: c_YCoQzwBvFpMow1urSdPDEk
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
          stance: supports
          locator: CBDB:29140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29140）
          source: &a1
            id: s_mp7pNpGWEEPymMCiL7tNm9
            source_type: api_record
            title: 中国历代人物传记资料库：王忱（CBDB 29140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29140&o=json
            external_identifier: CBDB:29140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V15dKFRfmC6HWq6dG1gdRm
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QviHEGxXyqYTETJr4a41wV
          claim_id: c_V15dKFRfmC6HWq6dG1gdRm
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_XueL9Kjct7aJ9cJ9Wts2Re
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1314年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P44ZTgkBECiKLyYhBrZ4am
          claim_id: c_XueL9Kjct7aJ9cJ9Wts2Re
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kymki3LGve9HfXGaoq5Lf6
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忱（1236年—1314年），元人物。籍贯寧晉，入仕徵辟，曾任東宮宿衛、肅政廉訪司副使、肅政廉訪司廉訪使。（中国历代人物传记资料库 CBDB 29140）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qwYmloLqK2FeRs1fjsJqz5
          claim_id: c_kymki3LGve9HfXGaoq5Lf6
          source_id: s_mp7pNpGWEEPymMCiL7tNm9
          stance: supports
          locator: CBDB:29140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ItZMrNlh0cbIFamzrJLLXw
        subject_person_id: p_cMTzMQQGq3a4M9xj7tvZK9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DRV1HsEBatah9fyUGYScze
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KK0aC0OcrpnoQeCKZo0o1R
          claim_id: c_ItZMrNlh0cbIFamzrJLLXw
          source_id: s_Zq7aC39h5DJEdq5YztHCFf
          stance: supports
          locator: 元人傳記資料索引，452：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Zq7aC39h5DJEdq5YztHCFf
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 29192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29192&o=json
            external_identifier: CBDB:29192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.988Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cMTzMQQGq3a4M9xj7tvZK9
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_UNGeNN5N3wBzcaVq2H5brW
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2E8J3qVo6HHNKQhDuGwNXL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c1IFXnRSpq2RFH1VINHtWP
          claim_id: c_UNGeNN5N3wBzcaVq2H5brW
          source_id: s_h4s884XLpTzBCAn8zSGJ9C
          stance: supports
          locator: CBDB 双向互证（祖父 王忱 ⇄ 孫 王浩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_h4s884XLpTzBCAn8zSGJ9C
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 29199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29199&o=json
            external_identifier: CBDB:29199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2E8J3qVo6HHNKQhDuGwNXL
        status: active
        display_name: 王浩
        merged_into_person_id: null
    - claim:
        id: c_OiemaHKKtuG1-JN-F4ILAx
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KZerDBNYLJDtatxLrhyvTw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xvuv8MRogdoKPt4-OWJxB
          claim_id: c_OiemaHKKtuG1-JN-F4ILAx
          source_id: s_tadhfygPsLnJ22iNu36dME
          stance: supports
          locator: CBDB 双向互证（祖父 王忱 ⇄ 孫 王淵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tadhfygPsLnJ22iNu36dME
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 29200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29200&o=json
            external_identifier: CBDB:29200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KZerDBNYLJDtatxLrhyvTw
        status: active
        display_name: 王淵
        merged_into_person_id: null
    - claim:
        id: c_51nP3yUjdzrFJuanLwUQtx
        subject_person_id: p_DRV1HsEBatah9fyUGYScze
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yRNSB28LfM7D9B4j5sK61C
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K79-JYm4eJ9GFpEwx8LMlV
          claim_id: c_51nP3yUjdzrFJuanLwUQtx
          source_id: s_tFfdNv4CRGZX43cjFkYZn6
          stance: supports
          locator: CBDB 双向互证（祖父 王忱 ⇄ 孫 王洙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tFfdNv4CRGZX43cjFkYZn6
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 29198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29198&o=json
            external_identifier: CBDB:29198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yRNSB28LfM7D9B4j5sK61C
        status: active
        display_name: 王洙
        merged_into_person_id: null
  other: []
---

# 王忱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忱 | accepted |
| birth.date | 1236年 | accepted |
| death.date | 1314年 | accepted |
| bio.summary | 王忱（1236年—1314年），元人物。籍贯寧晉，入仕徵辟，曾任東宮宿衛、肅政廉訪司副使、肅政廉訪司廉訪使。（中国历代人物传记资料库 CBDB 29140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cMTzMQQGq3a4M9xj7tvZK9 | 王玉 | accepted |
| descendants | p_2E8J3qVo6HHNKQhDuGwNXL | 王浩 | accepted |
| descendants | p_KZerDBNYLJDtatxLrhyvTw | 王淵 | accepted |
| descendants | p_yRNSB28LfM7D9B4j5sK61C | 王洙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王忱（CBDB 29140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29140&o=json)
- [中国历代人物传记资料库：王浩（CBDB 29199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29199&o=json)
- [中国历代人物传记资料库：王玉（CBDB 29192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29192&o=json)
- [中国历代人物传记资料库：王淵（CBDB 29200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29200&o=json)
- [中国历代人物传记资料库：王洙（CBDB 29198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29198&o=json)
