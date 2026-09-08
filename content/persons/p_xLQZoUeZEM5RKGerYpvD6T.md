---
schema: wang-person/v1
id: p_xLQZoUeZEM5RKGerYpvD6T
status: active
merged_into: null
display_name: 王师遂
cbdb_id: 175429
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QfhQGbx5PAftHjcVfLPgSm
        subject_person_id: p_xLQZoUeZEM5RKGerYpvD6T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师遂（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175429 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_exvRg6deBjLvqYZmYWBzeF
          claim_id: c_QfhQGbx5PAftHjcVfLPgSm
          source_id: s_VnTEQmgZMJcQut4D1oDZhc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VnTEQmgZMJcQut4D1oDZhc
            source_type: api_record
            title: 维基数据：王师遂（Q45659117）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659117
            external_identifier: Q45659117
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_siupmLfEWRnk6nSoGfztXo
          claim_id: c_QfhQGbx5PAftHjcVfLPgSm
          source_id: s_2Q3LGuut6emaxJLKvR4naq
          stance: supports
          locator: CBDB:175429
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2Q3LGuut6emaxJLKvR4naq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師遂（175429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175429&o=json
            external_identifier: CBDB:175429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.774Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_te3HJhh9jWeUfmJ5xhk4sN
        subject_person_id: p_xLQZoUeZEM5RKGerYpvD6T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MTi4KRH5XYcGB3Bju4JR1L
          claim_id: c_te3HJhh9jWeUfmJ5xhk4sN
          source_id: s_VnTEQmgZMJcQut4D1oDZhc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_VnTEQmgZMJcQut4D1oDZhc
            source_type: api_record
            title: 维基数据：王师遂（Q45659117）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659117
            external_identifier: Q45659117
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RaJqECxHwnGi8SfU4aVXHM
        subject_person_id: p_xLQZoUeZEM5RKGerYpvD6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师遂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bovn97x4QuBzbP5dKZYe3S
          claim_id: c_RaJqECxHwnGi8SfU4aVXHM
          source_id: s_2Q3LGuut6emaxJLKvR4naq
          stance: supports
          locator: Q45659117
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_eW9JSMJ2maGLctbJDimySo
          claim_id: c_RaJqECxHwnGi8SfU4aVXHM
          source_id: s_VnTEQmgZMJcQut4D1oDZhc
          stance: supports
          locator: Q45659117
          quotation: null
          interpretation_note: null
          source:
            id: s_VnTEQmgZMJcQut4D1oDZhc
            source_type: api_record
            title: 维基数据：王师遂（Q45659117）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659117
            external_identifier: Q45659117
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8LeDjg7MPx67g3LUVB2FSw
        subject_person_id: p_R43S4tSNhE9EYwSxHQi8DK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xLQZoUeZEM5RKGerYpvD6T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_89uc6wwWDjjtPDXriuHRqL
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_6HC9Tz6usZG9tpzmYrAfiQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_6HC9Tz6usZG9tpzmYrAfiQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王迺（175425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json
            external_identifier: CBDB:175425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.862Z
            metadata_json: null
        - id: cs_m95BHHToUx2hAy8cKZ2d1d
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_q2HM3LSwn2hCoD23EH61RQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_q2HM3LSwn2hCoD23EH61RQ
            source_type: api_record
            title: 维基数据：王迺（Q45658880）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658880
            external_identifier: Q45658880
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_oc5QC2J2VaTMP34HqDPpFT
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_VnTEQmgZMJcQut4D1oDZhc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VnTEQmgZMJcQut4D1oDZhc
            source_type: api_record
            title: 维基数据：王师遂（Q45659117）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45659117
            external_identifier: Q45659117
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:08.601Z
            metadata_json: null
        - id: cs_xaLGpe7iqmToPR7JgK4xn6
          claim_id: c_8LeDjg7MPx67g3LUVB2FSw
          source_id: s_2Q3LGuut6emaxJLKvR4naq
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2Q3LGuut6emaxJLKvR4naq
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師遂（175429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175429&o=json
            external_identifier: CBDB:175429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:08.774Z
            metadata_json: null
      object_person:
        id: p_R43S4tSNhE9EYwSxHQi8DK
        status: active
        display_name: 王迺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师遂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师遂（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府。中国历代人物传记资料库（CBDB）以人物编号 175429 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王师遂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R43S4tSNhE9EYwSxHQi8DK | 王迺 | accepted |

## 外部来源

- [维基数据：王迺（Q45658880）](https://www.wikidata.org/wiki/Q45658880)
- [维基数据：王师遂（Q45659117）](https://www.wikidata.org/wiki/Q45659117)
- [CBDB 中国历代人物传记资料库：王迺（175425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175425&o=json)
- [CBDB 中国历代人物传记资料库：王師遂（175429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175429&o=json)
