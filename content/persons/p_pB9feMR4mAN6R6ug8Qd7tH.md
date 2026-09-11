---
schema: wang-person/v1
id: p_pB9feMR4mAN6R6ug8Qd7tH
status: active
merged_into: null
display_name: 王汝善
cbdb_id: 212509
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLccQdMeWN2Zp8CB8gs2Hq
        subject_person_id: p_pB9feMR4mAN6R6ug8Qd7tH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝善，明人物。中国历代人物传记资料库（CBDB）以人物编号 212509 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_p7ei6zYyufAmKcNf7YoHkY
          claim_id: c_nLccQdMeWN2Zp8CB8gs2Hq
          source_id: s_446cE7d2mDf5M1rnAbi7yy
          stance: supports
          locator: CBDB:212509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_446cE7d2mDf5M1rnAbi7yy
            source_type: api_record
            title: 中国历代人物传记资料库：王汝善（CBDB 212509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212509&o=json
            external_identifier: CBDB:212509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b78eGf92datBw5Riu89GA8
        subject_person_id: p_pB9feMR4mAN6R6ug8Qd7tH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hEnHuPhHy9TLFCVobjoiwS
          claim_id: c_b78eGf92datBw5Riu89GA8
          source_id: s_446cE7d2mDf5M1rnAbi7yy
          stance: supports
          locator: CBDB:212509
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_446cE7d2mDf5M1rnAbi7yy
            source_type: api_record
            title: 中国历代人物传记资料库：王汝善（CBDB 212509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212509&o=json
            external_identifier: CBDB:212509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jLkLfbDi7bto3KSDFLMdG-
        subject_person_id: p_pB9feMR4mAN6R6ug8Qd7tH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A4DQB8jxPM4hHSSP72EbgN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJoXNHaI0k4rD_pmW9ZVqn
          claim_id: c_jLkLfbDi7bto3KSDFLMdG-
          source_id: s_fn8gqdmgeo5JPqtpGG2pZp
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fn8gqdmgeo5JPqtpGG2pZp
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 206037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json
            external_identifier: CBDB:206037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A4DQB8jxPM4hHSSP72EbgN
        status: active
        display_name: 王任
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝善，明人物。中国历代人物传记资料库（CBDB）以人物编号 212509 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王汝善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_A4DQB8jxPM4hHSSP72EbgN | 王任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任（CBDB 206037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206037&o=json)
- [中国历代人物传记资料库：王汝善（CBDB 212509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212509&o=json)
