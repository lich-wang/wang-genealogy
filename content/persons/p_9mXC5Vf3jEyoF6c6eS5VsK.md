---
schema: wang-person/v1
id: p_9mXC5Vf3jEyoF6c6eS5VsK
status: active
merged_into: null
display_name: 张氏
cbdb_id: 37848
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EYjYUU9JxU5BF4AqBghqUz
        subject_person_id: p_9mXC5Vf3jEyoF6c6eS5VsK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，王之望母。维基数据以独立条目 Q45429472 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Gjqw08hgFztaXOzeJ072am
          claim_id: c_EYjYUU9JxU5BF4AqBghqUz
          source_id: s_no1HoVtuS1GP5NCKePeCMx
          stance: supports
          locator: Q45429472
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_no1HoVtuS1GP5NCKePeCMx
            source_type: api_record
            title: 维基数据：张氏（Q45429472）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45429472
            external_identifier: Q45429472
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hRR676KpFL2U1HHmXYWoxa
        subject_person_id: p_9mXC5Vf3jEyoF6c6eS5VsK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8DHmDfp33BCkgwQ8S8RAsP
          claim_id: c_hRR676KpFL2U1HHmXYWoxa
          source_id: s_e2iBmBHnXFNVgLMEBAtdVZ
          stance: supports
          locator: Q45429472
          quotation: null
          interpretation_note: null
          source:
            id: s_e2iBmBHnXFNVgLMEBAtdVZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（37848）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37848&o=json
            external_identifier: CBDB:37848
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:17.918Z
            metadata_json: null
        - id: cs_MR1J51N5wwdGpLV27gCXmd
          claim_id: c_hRR676KpFL2U1HHmXYWoxa
          source_id: s_no1HoVtuS1GP5NCKePeCMx
          stance: supports
          locator: Q45429472
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ztBBKW1Ja3iU19c5EcX9Te
        subject_person_id: p_9mXC5Vf3jEyoF6c6eS5VsK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dugn9Y5GC1ysVBtTRs2WLM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TjyMSnKQfAT5T5axK8AgZ1
          claim_id: c_ztBBKW1Ja3iU19c5EcX9Te
          source_id: s_QvBFGAPqTXthL9LjsDRAhW
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_QvBFGAPqTXthL9LjsDRAhW
            source_type: api_record
            title: 维基数据：王纲（Q45401648）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401648
            external_identifier: Q45401648
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:17.572Z
            metadata_json: null
        - id: cs_ZfWPipC5wmEtJJrBYhABDs
          claim_id: c_ztBBKW1Ja3iU19c5EcX9Te
          source_id: s_no1HoVtuS1GP5NCKePeCMx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_bZsPUeB548pkUj2yb9MDew
          claim_id: c_ztBBKW1Ja3iU19c5EcX9Te
          source_id: s_v42oFBFgLwNyQFyKbPQrCY
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_v42oFBFgLwNyQFyKbPQrCY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綱（21993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21993&o=json
            external_identifier: CBDB:21993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:17.739Z
            metadata_json: null
      object_person:
        id: p_dugn9Y5GC1ysVBtTRs2WLM
        status: active
        display_name: 王纲
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，王之望母。维基数据以独立条目 Q45429472 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_dugn9Y5GC1ysVBtTRs2WLM | 王纲 | accepted |

## 外部来源

- [维基数据：王纲（Q45401648）](https://www.wikidata.org/wiki/Q45401648)
- [维基数据：张氏（Q45429472）](https://www.wikidata.org/wiki/Q45429472)
- [CBDB 中国历代人物传记资料库：王綱（21993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21993&o=json)
- [CBDB 中国历代人物传记资料库：張氏（37848）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37848&o=json)
