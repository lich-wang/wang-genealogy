---
schema: wang-person/v1
id: p_FX11CB9tTLVt3GMiHYtDmL
status: active
merged_into: null
display_name: 唐高宗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_afEfIEEEfDMSFvDGi3U3hi
        subject_person_id: p_FX11CB9tTLVt3GMiHYtDmL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐高宗李治（628年7月21日—683年12月27日），小名雉奴，字为善，唐朝皇帝，唐太宗李世民第九子、嫡三子，母文德皇后長孫氏，和胞妹晉陽公主一樣，唯一一對由太宗親自抚養長大的親生子女。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RanmRjuouPe_KWeVUAFrxo
          claim_id: c_afEfIEEEfDMSFvDGi3U3hi
          source_id: s_4SjcD4KBEdxVyfvpFFGqDF
          stance: supports
          locator: 导言
          quotation: 唐高宗李治（628年7月21日—683年12月27日），小名雉奴
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_4SjcD4KBEdxVyfvpFFGqDF
            source_type: website
            title: 中文维基百科：唐高宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%94%90%E9%AB%98%E5%AE%97
            external_identifier: Q9703
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dJy8UQxr5HhPvFwTh7Aqaw
        subject_person_id: p_FX11CB9tTLVt3GMiHYtDmL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐高宗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5rKKxpqRK86uJFmkmFiFZM
          claim_id: c_dJy8UQxr5HhPvFwTh7Aqaw
          source_id: s_fyzWE6ZocrmeTQezXCw6LH
          stance: supports
          locator: Q9703
          quotation: null
          interpretation_note: null
          source:
            id: s_fyzWE6ZocrmeTQezXCw6LH
            source_type: api_record
            title: 维基数据：唐高宗（Q9703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q9703
            external_identifier: Q9703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:44.474Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%94%90%E9%AB%98%E5%AE%97
        - id: cs_sS4AwEMVa8AzUjYoU5cCZB
          claim_id: c_dJy8UQxr5HhPvFwTh7Aqaw
          source_id: s_1krSRmidMKfgtCFqdsShLN
          stance: supports
          locator: Q9703
          quotation: null
          interpretation_note: null
          source:
            id: s_1krSRmidMKfgtCFqdsShLN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李治（19241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19241&o=json
            external_identifier: CBDB:19241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:39:44.627Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_d3b5fbZvopuzHgH4ZVisxz
        subject_person_id: p_FX11CB9tTLVt3GMiHYtDmL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GcNA3tAmUdhWNfqQjUwGnM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_s8u9tiFNdLnk28ABmSUogM
          claim_id: c_d3b5fbZvopuzHgH4ZVisxz
          source_id: s_dC5V2qMv7gM3rYSJ9V6XYV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dC5V2qMv7gM3rYSJ9V6XYV
            source_type: api_record
            title: 维基数据：王皇后（Q713112）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q713112
            external_identifier: Q713112
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:33.986Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E5%94%90%E9%AB%98%E5%AE%97)
        - id: cs_d6hLZNR29sYofCjGcxW7YB
          claim_id: c_d3b5fbZvopuzHgH4ZVisxz
          source_id: s_fyzWE6ZocrmeTQezXCw6LH
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fyzWE6ZocrmeTQezXCw6LH
            source_type: api_record
            title: 维基数据：唐高宗（Q9703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q9703
            external_identifier: Q9703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:44.474Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%94%90%E9%AB%98%E5%AE%97
      object_person:
        id: p_GcNA3tAmUdhWNfqQjUwGnM
        status: active
        display_name: 王皇后
        merged_into_person_id: null
    - claim:
        id: c_x3HCNgTyWgZ3U4V5dQPGD3
        subject_person_id: p_FX11CB9tTLVt3GMiHYtDmL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_h3JwsXKZAtSmcnTvJgMc6r
          claim_id: c_x3HCNgTyWgZ3U4V5dQPGD3
          source_id: s_LTdVBZPPZSBmRenkYm3fQF
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：舊唐書
          source:
            id: s_LTdVBZPPZSBmRenkYm3fQF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（444806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json
            external_identifier: CBDB:444806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:00:00.115Z
            metadata_json: null
      object_person:
        id: p_q7Qd8bWirDBt2fuJ4Z1Gc2
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 唐高宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 唐高宗李治（628年7月21日—683年12月27日），小名雉奴，字为善，唐朝皇帝，唐太宗李世民第九子、嫡三子，母文德皇后長孫氏，和胞妹晉陽公主一樣，唯一一對由太宗親自抚養長大的親生子女。 | accepted |
| name.primary | 唐高宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GcNA3tAmUdhWNfqQjUwGnM | 王皇后 | accepted |
| spouses | p_q7Qd8bWirDBt2fuJ4Z1Gc2 | 王氏 | accepted |

## 外部来源

- [维基数据：唐高宗（Q9703）](https://www.wikidata.org/wiki/Q9703)
- [维基数据：王皇后（Q713112）](https://www.wikidata.org/wiki/Q713112)
- [中文维基百科：唐高宗](https://zh.wikipedia.org/wiki/%E5%94%90%E9%AB%98%E5%AE%97)
- [CBDB 中国历代人物传记资料库：李治（19241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19241&o=json)
- [CBDB 中国历代人物传记资料库：王氏（444806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=444806&o=json)
