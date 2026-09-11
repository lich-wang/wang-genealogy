---
schema: wang-person/v1
id: p_hXNZ4BGKzCfs7ijs1DrTF4
status: active
merged_into: null
display_name: 王楨
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JtqDUR3iVN8qXauWH4qEgP
        subject_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kXAbRQWRzLCkBMGKF4wMH4
          claim_id: c_JtqDUR3iVN8qXauWH4qEgP
          source_id: s_f1KubxtpNNVusaPYzX37nV
          stance: supports
          locator: CBDB:56869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56869）
          source: &a1
            id: s_f1KubxtpNNVusaPYzX37nV
            source_type: api_record
            title: 中国历代人物传记资料库：王楨（CBDB 56869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56869&o=json
            external_identifier: CBDB:56869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HPc6EJdpzTsC1A9PRqk4Xz
        subject_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1609年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6q25qLmVwiE1kxPnyE2JD
          claim_id: c_HPc6EJdpzTsC1A9PRqk4Xz
          source_id: s_f1KubxtpNNVusaPYzX37nV
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
        id: c_gcTpAP6xt5UrmRvXxn2FQR
        subject_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1688年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MK9Qm3CQDCPQ6BPg55irpr
          claim_id: c_gcTpAP6xt5UrmRvXxn2FQR
          source_id: s_f1KubxtpNNVusaPYzX37nV
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
        id: c_pL4DNTFSwT1rbDUhXHCTVa
        subject_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楨（1609年—1688年），清人物。明清進士進士，籍贯長山，入仕進士，曾任吏科給事中、同考官、中書科中書舍人。（中国历代人物传记资料库 CBDB 56869）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ePNANiO2o_DYCaCq_9lT8Y
          claim_id: c_pL4DNTFSwT1rbDUhXHCTVa
          source_id: s_f1KubxtpNNVusaPYzX37nV
          stance: supports
          locator: CBDB:56869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cn_zCurOnQ6du8f2lTinWF
        subject_person_id: p_NGzYBHmPsN7jf7PrNSKRHT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n9AZYIHMaVQhcOnQwrsarA
          claim_id: c_cn_zCurOnQ6du8f2lTinWF
          source_id: s_goefvYhNb1SrjWrpf7raKK
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），67：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_goefvYhNb1SrjWrpf7raKK
            source_type: api_record
            title: 中国历代人物传记资料库：王重明（CBDB 513560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513560&o=json
            external_identifier: CBDB:513560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NGzYBHmPsN7jf7PrNSKRHT
        status: active
        display_name: 王重明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JJMRATQTN1DqfUZLsExTqz
        subject_person_id: p_BC1yS13LsNaFDgXGEbiDxv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AphwOx2XK7ytuiMZaNdoXh
          claim_id: c_JJMRATQTN1DqfUZLsExTqz
          source_id: s_o1aAAfoBHtdhaEmZCoLTz2
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），67：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o1aAAfoBHtdhaEmZCoLTz2
            source_type: api_record
            title: 中国历代人物传记资料库：王廕（CBDB 513561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513561&o=json
            external_identifier: CBDB:513561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BC1yS13LsNaFDgXGEbiDxv
        status: active
        display_name: 王廕
        merged_into_person_id: null
    - claim:
        id: c_46vRLADqiPN_net3V4EecT
        subject_person_id: p_gYyBHFMPwATU18hyCoNpwJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hXNZ4BGKzCfs7ijs1DrTF4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbtqAFUoBZMsDxggmQqD4I
          claim_id: c_46vRLADqiPN_net3V4EecT
          source_id: s_fsNNzXFViCMN5UURDUAEQM
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），67：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fsNNzXFViCMN5UURDUAEQM
            source_type: api_record
            title: 中国历代人物传记资料库：王東漢（CBDB 513559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513559&o=json
            external_identifier: CBDB:513559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gYyBHFMPwATU18hyCoNpwJ
        status: active
        display_name: 王東漢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楨 | accepted |
| birth.date | 1609年 | accepted |
| death.date | 1688年 | accepted |
| bio.summary | 王楨（1609年—1688年），清人物。明清進士進士，籍贯長山，入仕進士，曾任吏科給事中、同考官、中書科中書舍人。（中国历代人物传记资料库 CBDB 56869） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NGzYBHmPsN7jf7PrNSKRHT | 王重明 | accepted |
| ancestors | p_BC1yS13LsNaFDgXGEbiDxv | 王廕 | accepted |
| ancestors | p_gYyBHFMPwATU18hyCoNpwJ | 王東漢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王東漢（CBDB 513559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513559&o=json)
- [中国历代人物传记资料库：王廕（CBDB 513561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513561&o=json)
- [中国历代人物传记资料库：王楨（CBDB 56869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56869&o=json)
- [中国历代人物传记资料库：王重明（CBDB 513560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513560&o=json)
