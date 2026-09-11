---
schema: wang-person/v1
id: p_ufZP78fAjpAL3GSLCQvWtA
status: active
merged_into: null
display_name: 王玉佩
cbdb_id: 69124
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RZJJ33i6FhTqD6fg3EDQcJ
        subject_person_id: p_ufZP78fAjpAL3GSLCQvWtA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉佩（卒于1796年），清人物。中国历代人物传记资料库（CBDB）以人物编号 69124 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_e9vUwwtaLlpuElnwHmthtA
          claim_id: c_RZJJ33i6FhTqD6fg3EDQcJ
          source_id: s_iPxkR4t68M2wyB2Sqd7adA
          stance: supports
          locator: CBDB:69124
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_iPxkR4t68M2wyB2Sqd7adA
            source_type: api_record
            title: 中国历代人物传记资料库：王玉佩（CBDB 69124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69124&o=json
            external_identifier: CBDB:69124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gDFHi4dNuizdHHaeiv74QM
        subject_person_id: p_ufZP78fAjpAL3GSLCQvWtA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1796年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1796-01-01
            latest: 1796-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5nKWf3LaeX5kSEcabpGU2w
          claim_id: c_gDFHi4dNuizdHHaeiv74QM
          source_id: s_iPxkR4t68M2wyB2Sqd7adA
          stance: supports
          locator: CBDB:69124
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1796
          source:
            id: s_iPxkR4t68M2wyB2Sqd7adA
            source_type: api_record
            title: 中国历代人物传记资料库：王玉佩（CBDB 69124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69124&o=json
            external_identifier: CBDB:69124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GqH1a9SbHVHUAEnxVga6dW
        subject_person_id: p_ufZP78fAjpAL3GSLCQvWtA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Br2nCpbGMttQfiZmGF3uGx
          claim_id: c_GqH1a9SbHVHUAEnxVga6dW
          source_id: s_iPxkR4t68M2wyB2Sqd7adA
          stance: supports
          locator: CBDB:69124
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1796
          source:
            id: s_iPxkR4t68M2wyB2Sqd7adA
            source_type: api_record
            title: 中国历代人物传记资料库：王玉佩（CBDB 69124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69124&o=json
            external_identifier: CBDB:69124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:34.254Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4oQ4XIF_-AVzrtimArLTLL
        subject_person_id: p_ufZP78fAjpAL3GSLCQvWtA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LFA2NDjKJrFyob1xrNhED4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_De0FN8nHtFifjn1LZsYm7Z
          claim_id: c_4oQ4XIF_-AVzrtimArLTLL
          source_id: s_5kret5HRaQMYdB9fsZuHRc
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12822：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5kret5HRaQMYdB9fsZuHRc
            source_type: api_record
            title: 中国历代人物传记资料库：王映榮（CBDB 526705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526705&o=json
            external_identifier: CBDB:526705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LFA2NDjKJrFyob1xrNhED4
        status: active
        display_name: 王映榮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉佩（卒于1796年），清人物。中国历代人物传记资料库（CBDB）以人物编号 69124 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1796年 | accepted |
| name.primary | 王玉佩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LFA2NDjKJrFyob1xrNhED4 | 王映榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王映榮（CBDB 526705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526705&o=json)
- [中国历代人物传记资料库：王玉佩（CBDB 69124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69124&o=json)
