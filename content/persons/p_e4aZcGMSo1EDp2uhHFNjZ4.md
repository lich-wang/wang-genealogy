---
schema: wang-person/v1
id: p_e4aZcGMSo1EDp2uhHFNjZ4
status: active
merged_into: null
display_name: 王中徹
cbdb_id: 185431
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aC8YEr3Bmkx411wt6XYXy2
        subject_person_id: p_e4aZcGMSo1EDp2uhHFNjZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中徹（卒于855年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185431 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lhxxYIDfoOLZtXi47mX0tg
          claim_id: c_aC8YEr3Bmkx411wt6XYXy2
          source_id: s_47HDTFTKwhSEAAdqtJcpPB
          stance: supports
          locator: CBDB:185431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_47HDTFTKwhSEAAdqtJcpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王中徹（CBDB 185431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185431&o=json
            external_identifier: CBDB:185431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UcE9UJ1eD3ZS3mdU4cCv3d
        subject_person_id: p_e4aZcGMSo1EDp2uhHFNjZ4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 855年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0855-01-01
            latest: 0855-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e5PTNNAfFPZNde9WToxW2F
          claim_id: c_UcE9UJ1eD3ZS3mdU4cCv3d
          source_id: s_47HDTFTKwhSEAAdqtJcpPB
          stance: supports
          locator: CBDB:185431
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 855
          source:
            id: s_47HDTFTKwhSEAAdqtJcpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王中徹（CBDB 185431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185431&o=json
            external_identifier: CBDB:185431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8frrNWPn7DmNGkRUB9M8MN
        subject_person_id: p_e4aZcGMSo1EDp2uhHFNjZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中徹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zCo6K2qvGTCYpTfPj9UEER
          claim_id: c_8frrNWPn7DmNGkRUB9M8MN
          source_id: s_47HDTFTKwhSEAAdqtJcpPB
          stance: supports
          locator: CBDB:185431
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 855
          source:
            id: s_47HDTFTKwhSEAAdqtJcpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王中徹（CBDB 185431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185431&o=json
            external_identifier: CBDB:185431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ivEK7HQM2fsRXgYkExWlra
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e4aZcGMSo1EDp2uhHFNjZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeXmisMeFxGHvFm1ALDetJ
          claim_id: c_ivEK7HQM2fsRXgYkExWlra
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_45sVsGucdcRmogpRJoCZis
        status: active
        display_name: 王敬仲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王中徹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王中徹（卒于855年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185431 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 855年 | accepted |
| name.primary | 王中徹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_45sVsGucdcRmogpRJoCZis | 王敬仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
- [中国历代人物传记资料库：王中徹（CBDB 185431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185431&o=json)
