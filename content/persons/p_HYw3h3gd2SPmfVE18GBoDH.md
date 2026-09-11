---
schema: wang-person/v1
id: p_HYw3h3gd2SPmfVE18GBoDH
status: active
merged_into: null
display_name: 王凝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEca2han61Rp3aPnrGmKqL
        subject_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQy4QvT5VDscQKqndXPZB9
          claim_id: c_AEca2han61Rp3aPnrGmKqL
          source_id: s_59DBsN2HGT57x16LufHKi6
          stance: supports
          locator: CBDB:144880
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144880）
          source: &a1
            id: s_59DBsN2HGT57x16LufHKi6
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 144880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144880&o=json
            external_identifier: CBDB:144880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MkxzJrDN1ZhLMKZ4KQ1a1w
        subject_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 821年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8andT7iskZvZSQp6TGwavS
          claim_id: c_MkxzJrDN1ZhLMKZ4KQ1a1w
          source_id: s_59DBsN2HGT57x16LufHKi6
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
        id: c_Y1d77P5MaBL5FPp785gT2u
        subject_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DMNzRMhH5FBtuSBf18B15v
          claim_id: c_Y1d77P5MaBL5FPp785gT2u
          source_id: s_59DBsN2HGT57x16LufHKi6
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
        id: c_5ofuWEvuHFEMjDP2utAr2q
        subject_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_svd6BPFmY1KkTVCkdTwq7g
          claim_id: c_5ofuWEvuHFEMjDP2utAr2q
          source_id: s_59DBsN2HGT57x16LufHKi6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sctcob05soGpGHoyhLLuN1
        subject_person_id: p_zq12paWxqfRQfLAfsBmo4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PD1ATTKk05LMCgkroz1gKi
          claim_id: c_sctcob05soGpGHoyhLLuN1
          source_id: s_59DBsN2HGT57x16LufHKi6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zq12paWxqfRQfLAfsBmo4u
        status: active
        display_name: 王眾仲
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZMNSwdTQb7XHDfkSgEsYFd
        subject_person_id: p_HYw3h3gd2SPmfVE18GBoDH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DyrjtDPVkCAAmu77vMdtW5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NeUPqvG1Ns1J7DugQD2hNi
          claim_id: c_ZMNSwdTQb7XHDfkSgEsYFd
          source_id: s_AzcrSuHMHpRocLLoZPiMEs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AzcrSuHMHpRocLLoZPiMEs
            source_type: api_record
            title: 中国历代人物传记资料库：王鑣（CBDB 175712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175712&o=json
            external_identifier: CBDB:175712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DyrjtDPVkCAAmu77vMdtW5
        status: active
        display_name: 王鑣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| birth.date | 821年 | accepted |
| death.date | 878年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zq12paWxqfRQfLAfsBmo4u | 王眾仲 | accepted |
| children | p_DyrjtDPVkCAAmu77vMdtW5 | 王鑣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑣（CBDB 175712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175712&o=json)
- [中国历代人物传记资料库：王凝（CBDB 144880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144880&o=json)
