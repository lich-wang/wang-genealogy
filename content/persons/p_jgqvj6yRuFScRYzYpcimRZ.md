---
schema: wang-person/v1
id: p_jgqvj6yRuFScRYzYpcimRZ
status: active
merged_into: null
display_name: 王士彦
cbdb_id: 307065
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bzPPNZ8nTtrF9bEAKxGqoT
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士彦，明人物。嘉靖二十三年進士，籍贯沂州，入仕監生。（中国历代人物传记资料库 CBDB 307065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FeXam6WsPSQcfjAs46Qw8e
          claim_id: c_bzPPNZ8nTtrF9bEAKxGqoT
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs__tgXg-8d2oJAsXYb48KpDJ
          claim_id: c_bzPPNZ8nTtrF9bEAKxGqoT
          source_id: s_mSwGzHWH1XVALasnCo5Qnh
          stance: supports
          locator: CBDB:307065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mSwGzHWH1XVALasnCo5Qnh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士彥（307065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307065&o=json
            external_identifier: CBDB:307065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.235Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HRQNeWThiKPhTyrSM7QPJR
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士彦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SbSVEENU8pJggz7ChKFw9a
          claim_id: c_HRQNeWThiKPhTyrSM7QPJR
          source_id: s_mSwGzHWH1XVALasnCo5Qnh
          stance: supports
          locator: Q45573102
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_a7eGD43GJYeeYMgcxY6Atg
          claim_id: c_HRQNeWThiKPhTyrSM7QPJR
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: Q45573102
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e9BNNCRp6Rvt364R628KSP
        subject_person_id: p_7koQzcggkeDLYupbQwieGE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LM7DkGNhzFQ9R2Tb2vztpE
          claim_id: c_e9BNNCRp6Rvt364R628KSP
          source_id: s_xsPTYDtJ99pFyKQsn3EBUa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xsPTYDtJ99pFyKQsn3EBUa
            source_type: api_record
            title: 维基数据：王璟（Q15929306）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15929306
            external_identifier: Q15929306
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:35.752Z
            metadata_json: null
        - id: cs_eYx2U1WFbobnbGGUpw5xx6
          claim_id: c_e9BNNCRp6Rvt364R628KSP
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person:
        id: p_7koQzcggkeDLYupbQwieGE
        status: active
        display_name: 王璟
        merged_into_person_id: null
  children:
    - claim:
        id: c_9HQwkGS6MbcyzRmLo8Hcmc
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VX8eVdiTmFRpVjT6iBMQw8
          claim_id: c_9HQwkGS6MbcyzRmLo8Hcmc
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_yuwJ9AdZyXv4txPkHsQkxc
          claim_id: c_9HQwkGS6MbcyzRmLo8Hcmc
          source_id: s_fhNQgV3E9dkVpKA3u7TQhA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fhNQgV3E9dkVpKA3u7TQhA
            source_type: api_record
            title: 维基数据：王宗性（Q45458696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45458696
            external_identifier: Q45458696
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E6%80%A7
        - id: cs_nRf6EqFxjfUj1gqGP5dAPh
          claim_id: c_9HQwkGS6MbcyzRmLo8Hcmc
          source_id: s_mSwGzHWH1XVALasnCo5Qnh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十三年登科錄:一卷
          source: *a1
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士彦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士彦，明人物。嘉靖二十三年進士，籍贯沂州，入仕監生。（中国历代人物传记资料库 CBDB 307065） | accepted |
| name.primary | 王士彦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7koQzcggkeDLYupbQwieGE | 王璟 | accepted |
| children | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [维基数据：王璟（Q15929306）](https://www.wikidata.org/wiki/Q15929306)
- [维基数据：王士彦（Q45573102）](https://www.wikidata.org/wiki/Q45573102)
- [维基数据：王宗性（Q45458696）](https://www.wikidata.org/wiki/Q45458696)
- [CBDB 中国历代人物传记资料库：王士彥（307065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307065&o=json)
