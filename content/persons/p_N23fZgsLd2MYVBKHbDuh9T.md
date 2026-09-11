---
schema: wang-person/v1
id: p_N23fZgsLd2MYVBKHbDuh9T
status: active
merged_into: null
display_name: 王維
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J4qzAveLe4DgFaqFGpXxSu
        subject_person_id: p_N23fZgsLd2MYVBKHbDuh9T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iPrtYXRUhTwtJeCopj4FKY
          claim_id: c_J4qzAveLe4DgFaqFGpXxSu
          source_id: s_ChjRdaLN11qG116dQJ7tdq
          stance: supports
          locator: CBDB:32174
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32174）
          source: &a1
            id: s_ChjRdaLN11qG116dQJ7tdq
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 32174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32174&o=json
            external_identifier: CBDB:32174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_urMVne69on68yf3ypBVyr4
        subject_person_id: p_N23fZgsLd2MYVBKHbDuh9T
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7wWVdymbMKTXpRTjfWXf1
          claim_id: c_urMVne69on68yf3ypBVyr4
          source_id: s_ChjRdaLN11qG116dQJ7tdq
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
        id: c_Qp5HfmFfuWPPQpNF4J5xbR
        subject_person_id: p_N23fZgsLd2MYVBKHbDuh9T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rsbQBEH645FMAPMQ6Te2CS
          claim_id: c_Qp5HfmFfuWPPQpNF4J5xbR
          source_id: s_ChjRdaLN11qG116dQJ7tdq
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
        id: c_cNmE6FCE56vJHjJTrGNEWP
        subject_person_id: p_N23fZgsLd2MYVBKHbDuh9T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維（700年—761年），唐人物。籍贯河東，身份为書法家、畫家，入仕進士，曾任殿中侍御史、給事中、集賢殿學士。（中国历代人物传记资料库 CBDB 32174）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H0eqPGk4POKWl1EboBz8tZ
          claim_id: c_cNmE6FCE56vJHjJTrGNEWP
          source_id: s_ChjRdaLN11qG116dQJ7tdq
          stance: supports
          locator: CBDB:32174
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s4sW51UjGM0ZnXF8bEyecw
        subject_person_id: p_S4N2Cev8cRhe7jcPfNaRgM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N23fZgsLd2MYVBKHbDuh9T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SlEvDM-RMIvtQJ-Li95033
          claim_id: c_s4sW51UjGM0ZnXF8bEyecw
          source_id: s_S3QZnAK5T62oAi1ZixcCai
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_S3QZnAK5T62oAi1ZixcCai
            source_type: api_record
            title: 中国历代人物传记资料库：王處廉（CBDB 32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_S4N2Cev8cRhe7jcPfNaRgM
        status: active
        display_name: 王處廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維 | accepted |
| birth.date | 700年 | accepted |
| death.date | 761年 | accepted |
| bio.summary | 王維（700年—761年），唐人物。籍贯河東，身份为書法家、畫家，入仕進士，曾任殿中侍御史、給事中、集賢殿學士。（中国历代人物传记资料库 CBDB 32174） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S4N2Cev8cRhe7jcPfNaRgM | 王處廉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處廉（CBDB 32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [中国历代人物传记资料库：王維（CBDB 32174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32174&o=json)
