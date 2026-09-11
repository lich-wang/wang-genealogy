---
schema: wang-person/v1
id: p_AJ36QsHYvNFFPiM32NAShM
status: active
merged_into: null
display_name: 王秉良
cbdb_id: 201458
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R7JqVSBWc2egRNHQB5hHp5
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉良（生于1473年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201458 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_4OW3pgjQpkD1vUTAP0Zkba
          claim_id: c_R7JqVSBWc2egRNHQB5hHp5
          source_id: s_mDo1UKWcCJgtUpPrkvt4Mg
          stance: supports
          locator: CBDB:201458
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_mDo1UKWcCJgtUpPrkvt4Mg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉良（CBDB 201458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json
            external_identifier: CBDB:201458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4nMBLivJBvGYioC6oAs9A1
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1473年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1473-01-01
            latest: 1473-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZEKYp6pcCpskMzFQPDvdYg
          claim_id: c_4nMBLivJBvGYioC6oAs9A1
          source_id: s_mDo1UKWcCJgtUpPrkvt4Mg
          stance: supports
          locator: CBDB:201458
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1473
          source:
            id: s_mDo1UKWcCJgtUpPrkvt4Mg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉良（CBDB 201458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json
            external_identifier: CBDB:201458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JEvvU8tyg5x5LfAPK5EUm4
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nUv63PshryCEDc4VLCaGsK
          claim_id: c_JEvvU8tyg5x5LfAPK5EUm4
          source_id: s_mDo1UKWcCJgtUpPrkvt4Mg
          stance: supports
          locator: CBDB:201458
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1473
          source:
            id: s_mDo1UKWcCJgtUpPrkvt4Mg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉良（CBDB 201458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json
            external_identifier: CBDB:201458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_M-wuToyMTjD1IUXSye28zL
        subject_person_id: p_uv7Y4sorz1AJL6728idjYf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AJ36QsHYvNFFPiM32NAShM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVGEhi6vwoH4nEfHb6nl2Y
          claim_id: c_M-wuToyMTjD1IUXSye28zL
          source_id: s_CtC3GbwL4MAKsNyr47hF8c
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CtC3GbwL4MAKsNyr47hF8c
            source_type: api_record
            title: 中国历代人物传记资料库：王繼先（CBDB 272749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272749&o=json
            external_identifier: CBDB:272749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uv7Y4sorz1AJL6728idjYf
        status: active
        display_name: 王繼先
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王秉良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秉良（生于1473年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201458 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1473年 | accepted |
| name.primary | 王秉良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_uv7Y4sorz1AJL6728idjYf | 王繼先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉良（CBDB 201458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201458&o=json)
- [中国历代人物传记资料库：王繼先（CBDB 272749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272749&o=json)
