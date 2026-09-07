---
schema: wang-person/v1
id: p_tvnrFsvHvQUKrNdzPoHEVm
status: active
merged_into: null
display_name: 王益之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sZeciKNfG9p89XZM51WBCH
        subject_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王益之，宋人物。CBDB 记录其籍贯记录为金華，身份包括經學家—漢學，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 22239 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bqxwom48Dn2EqHjY6FRNEo
          claim_id: c_sZeciKNfG9p89XZM51WBCH
          source_id: s_hGdsQz7aqgwRprM8Z69YpF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hGdsQz7aqgwRprM8Z69YpF
            source_type: api_record
            title: 维基数据：王益之（Q18905525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905525
            external_identifier: Q18905525
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:06.804Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B
        - id: cs_ehK-I3AOm4IE3fU2gey4ZU
          claim_id: c_sZeciKNfG9p89XZM51WBCH
          source_id: s_gXKt8x2CzaZnCb1hs7YGLa
          stance: supports
          locator: CBDB:22239
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gXKt8x2CzaZnCb1hs7YGLa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益之（22239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22239&o=json
            external_identifier: CBDB:22239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:06.970Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZXBw3PHHgSuVnRZ8iR7fVa
        subject_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4m489yjPSAgNhnrY8Tm35S
          claim_id: c_ZXBw3PHHgSuVnRZ8iR7fVa
          source_id: s_hGdsQz7aqgwRprM8Z69YpF
          stance: supports
          locator: Q18905525
          quotation: null
          interpretation_note: null
          source:
            id: s_hGdsQz7aqgwRprM8Z69YpF
            source_type: api_record
            title: 维基数据：王益之（Q18905525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905525
            external_identifier: Q18905525
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:06.804Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B
        - id: cs_ttBZwcWaJgKqRCXdqSo5NQ
          claim_id: c_ZXBw3PHHgSuVnRZ8iR7fVa
          source_id: s_gXKt8x2CzaZnCb1hs7YGLa
          stance: supports
          locator: Q18905525
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王益之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王益之，宋人物。CBDB 记录其籍贯记录为金華，身份包括經學家—漢學，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 22239 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王益之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王益之（Q18905525）](https://www.wikidata.org/wiki/Q18905525)
- [CBDB 中国历代人物传记资料库：王益之（22239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22239&o=json)
