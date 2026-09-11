---
schema: wang-person/v1
id: p_8tcFGh3NZERHQcBZnwxj4d
status: active
merged_into: null
display_name: 王世祿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gs2PVTfemzoqBkCA5XewEr
        subject_person_id: p_8tcFGh3NZERHQcBZnwxj4d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rfnEGBvMowXMBVa5oDUsep
          claim_id: c_gs2PVTfemzoqBkCA5XewEr
          source_id: s_qMUXBxpxJoQA3BdbqSDPQ4
          stance: supports
          locator: CBDB:201930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201930）
          source: &a1
            id: s_qMUXBxpxJoQA3BdbqSDPQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王世祿（CBDB 201930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201930&o=json
            external_identifier: CBDB:201930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3gSDjH334ZHRQBFcBzti8A
        subject_person_id: p_8tcFGh3NZERHQcBZnwxj4d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7bkNvvpuiCUkkBakXLpy4
          claim_id: c_3gSDjH334ZHRQBFcBzti8A
          source_id: s_qMUXBxpxJoQA3BdbqSDPQ4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xnxFyhuqVMkAUvNEdBM46B
        subject_person_id: p_8tcFGh3NZERHQcBZnwxj4d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世祿（生于1484年），明人物。明清進士進士，籍贯廣德州，入仕進士，曾任守備。（中国历代人物传记资料库 CBDB 201930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_phM9SsqK084dvH14MSCSMv
          claim_id: c_xnxFyhuqVMkAUvNEdBM46B
          source_id: s_qMUXBxpxJoQA3BdbqSDPQ4
          stance: supports
          locator: CBDB:201930
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LNMVRq3zfeFT5qgEEXwvOj
        subject_person_id: p_vcJm1ydj1HYBJUJSMh8z9z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8tcFGh3NZERHQcBZnwxj4d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75k_JpDw_JarljbFw6Qx1O
          claim_id: c_LNMVRq3zfeFT5qgEEXwvOj
          source_id: s_trCabA8oJ9Wef36Pt77tHk
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_trCabA8oJ9Wef36Pt77tHk
            source_type: api_record
            title: 中国历代人物传记资料库：王崇本（CBDB 280701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280701&o=json
            external_identifier: CBDB:280701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vcJm1ydj1HYBJUJSMh8z9z
        status: active
        display_name: 王崇本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o73FdzJbtTN5vzO-un7EBz
        subject_person_id: p_2rxHcDQz4GEPXHSb1zS8Br
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8tcFGh3NZERHQcBZnwxj4d
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EAyR6AuCqPvlwe7YXUSzuv
          claim_id: c_o73FdzJbtTN5vzO-un7EBz
          source_id: s_r494q5gLwWCT4hNU8HP4hb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r494q5gLwWCT4hNU8HP4hb
            source_type: api_record
            title: 中国历代人物传记资料库：王永寧（CBDB 280699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280699&o=json
            external_identifier: CBDB:280699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2rxHcDQz4GEPXHSb1zS8Br
        status: active
        display_name: 王永寧
        merged_into_person_id: null
    - claim:
        id: c_fohNMFNWtO0OeJ1S6FxZw2
        subject_person_id: p_yDjKC3qC63KGTnM8XebPRv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8tcFGh3NZERHQcBZnwxj4d
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IuSTnXpLpBpgLZpFPKpsjB
          claim_id: c_fohNMFNWtO0OeJ1S6FxZw2
          source_id: s_ZhN4R1R1aLNkrDxAhsgKH6
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZhN4R1R1aLNkrDxAhsgKH6
            source_type: api_record
            title: 中国历代人物传记资料库：王裕瑾（CBDB 280700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280700&o=json
            external_identifier: CBDB:280700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_yDjKC3qC63KGTnM8XebPRv
        status: active
        display_name: 王裕瑾
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世祿 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | 王世祿（生于1484年），明人物。明清進士進士，籍贯廣德州，入仕進士，曾任守備。（中国历代人物传记资料库 CBDB 201930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vcJm1ydj1HYBJUJSMh8z9z | 王崇本 | accepted |
| ancestors | p_2rxHcDQz4GEPXHSb1zS8Br | 王永寧 | accepted |
| ancestors | p_yDjKC3qC63KGTnM8XebPRv | 王裕瑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇本（CBDB 280701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280701&o=json)
- [中国历代人物传记资料库：王世祿（CBDB 201930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201930&o=json)
- [中国历代人物传记资料库：王永寧（CBDB 280699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280699&o=json)
- [中国历代人物传记资料库：王裕瑾（CBDB 280700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280700&o=json)
