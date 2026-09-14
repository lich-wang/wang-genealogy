---
schema: wang-person/v1
id: p_T3M3sq2MZq8jQQSuDjj1H9
status: active
merged_into: null
display_name: 王苘
cbdb_id: 222180
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MF7UhAjtnmLy1NMFHrms3z
        subject_person_id: p_T3M3sq2MZq8jQQSuDjj1H9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苘，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222180）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Z1TTjJXjeEjnblq8TCTazc
          claim_id: c_MF7UhAjtnmLy1NMFHrms3z
          source_id: s_2s6UF6BQXTznxKzW9GHLeN
          stance: supports
          locator: CBDB:222180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2s6UF6BQXTznxKzW9GHLeN
            source_type: api_record
            title: 中国历代人物传记资料库：王苘（CBDB 222180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json
            external_identifier: CBDB:222180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NrsWWWwbu8DxJ5w7ijyuCB
        subject_person_id: p_T3M3sq2MZq8jQQSuDjj1H9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王苘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PkfedzvKj6QWtYDrEkGKo1
          claim_id: c_NrsWWWwbu8DxJ5w7ijyuCB
          source_id: s_2s6UF6BQXTznxKzW9GHLeN
          stance: supports
          locator: CBDB:222180
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pa9M47kCgH7EPf1uM3dBH2
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3M3sq2MZq8jQQSuDjj1H9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gi1eYOcUQbFHybWZN12r8P
          claim_id: c_Pa9M47kCgH7EPf1uM3dBH2
          source_id: s_e6ScjfNev0huNZN8Skl5NK
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王苘 与 王荁 为同胞（CBDB 记「兄」），王荁 之父／母即 王苘 之父／母。
          source:
            id: s_e6ScjfNev0huNZN8Skl5NK
            source_type: api_record
            title: 中国历代人物传记资料库：王苘（CBDB 222180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json
            external_identifier: CBDB:222180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y6uO7OkhnJ4W0hmD5PeeVg
        subject_person_id: p_T3M3sq2MZq8jQQSuDjj1H9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pBHZRMGFfRNHzF-7GpbYRe
          claim_id: c_y6uO7OkhnJ4W0hmD5PeeVg
          source_id: s_e6ScjfNev0huNZN8Skl5NK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e6ScjfNev0huNZN8Skl5NK
            source_type: api_record
            title: 中国历代人物传记资料库：王苘（CBDB 222180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json
            external_identifier: CBDB:222180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王苘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王苘，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222180） | accepted |
| name.primary | 王苘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王苘（CBDB 222180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222180&o=json)
