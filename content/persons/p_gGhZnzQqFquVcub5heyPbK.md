---
schema: wang-person/v1
id: p_gGhZnzQqFquVcub5heyPbK
status: active
merged_into: null
display_name: 王倬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gPxXkrkkCkjGT3PWyZTsH3
        subject_person_id: p_gGhZnzQqFquVcub5heyPbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TLuKkz3URaKzmGWGmtjaL
          claim_id: c_gPxXkrkkCkjGT3PWyZTsH3
          source_id: s_MA11gMpZjCdryJkEKQjNyY
          stance: supports
          locator: CBDB:192980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192980）
          source: &a1
            id: s_MA11gMpZjCdryJkEKQjNyY
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 192980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192980&o=json
            external_identifier: CBDB:192980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_crN8PP6nrNDt2oNvCi5XDg
        subject_person_id: p_gGhZnzQqFquVcub5heyPbK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 838年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6cJkCQa3sCndc69meFsGTP
          claim_id: c_crN8PP6nrNDt2oNvCi5XDg
          source_id: s_MA11gMpZjCdryJkEKQjNyY
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
        id: c_rFD75kj7yKYwYN3WV52Yi6
        subject_person_id: p_gGhZnzQqFquVcub5heyPbK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬（卒于838年），唐人物。籍贯汧陽。（中国历代人物传记资料库 CBDB 192980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R11G2yUR1kR3SfiIj8Q5JS
          claim_id: c_rFD75kj7yKYwYN3WV52Yi6
          source_id: s_MA11gMpZjCdryJkEKQjNyY
          stance: supports
          locator: CBDB:192980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pDkMR6LXh-p2yaCosfcuxN
        subject_person_id: p_aaiHJwLEK4x15AzbShdWFc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gGhZnzQqFquVcub5heyPbK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UQurorCmoDHYi53Q5Cc-Qo
          claim_id: c_pDkMR6LXh-p2yaCosfcuxN
          source_id: s_2puGC82E4CtAEoaDwfg4iN
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2puGC82E4CtAEoaDwfg4iN
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 145625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145625&o=json
            external_identifier: CBDB:145625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aaiHJwLEK4x15AzbShdWFc
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倬 | accepted |
| death.date | 838年 | accepted |
| bio.summary | 王倬（卒于838年），唐人物。籍贯汧陽。（中国历代人物传记资料库 CBDB 192980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aaiHJwLEK4x15AzbShdWFc | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 145625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145625&o=json)
- [中国历代人物传记资料库：王倬（CBDB 192980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192980&o=json)
