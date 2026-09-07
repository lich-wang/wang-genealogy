---
schema: wang-person/v1
id: p_8dMoppvhgbfMHUM2dSCPA1
status: active
merged_into: null
display_name: 陈伯宗
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DzzcYncjIZ6FEFTn4tYCgs
        subject_person_id: p_8dMoppvhgbfMHUM2dSCPA1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈伯宗，中国陈朝皇帝。维基数据以独立条目 Q718222 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_0f3vWs42capZGKw5Hjpm0-
          claim_id: c_DzzcYncjIZ6FEFTn4tYCgs
          source_id: s_AKeEWhfT4Euh5ebeXcSrAs
          stance: supports
          locator: Q718222
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_AKeEWhfT4Euh5ebeXcSrAs
            source_type: api_record
            title: 维基数据：陈伯宗（Q718222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718222
            external_identifier: Q718222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:59.225Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fE2wHH1iM5JBGUhJ1XAw6Y
        subject_person_id: p_8dMoppvhgbfMHUM2dSCPA1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈伯宗
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DWH2JCoKez13iZN9UgsQL4
          claim_id: c_fE2wHH1iM5JBGUhJ1XAw6Y
          source_id: s_AKeEWhfT4Euh5ebeXcSrAs
          stance: supports
          locator: Q718222
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jsVRmo9KaERdEfNsvCCzJB
          claim_id: c_fE2wHH1iM5JBGUhJ1XAw6Y
          source_id: s_7DagkFmJWSDZCC4XBFfbQp
          stance: supports
          locator: Q718222
          quotation: null
          interpretation_note: null
          source:
            id: s_7DagkFmJWSDZCC4XBFfbQp
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳伯宗（21301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21301&o=json
            external_identifier: CBDB:21301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:59:59.387Z
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
        id: c_RY9wPuAQkhYtRUcwp6DnxE
        subject_person_id: p_8dMoppvhgbfMHUM2dSCPA1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_P3HJSwZEVayyXGAC4NpdpW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_QSQNeEraUJqwzxGyuuZyrA
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_zfPw38AQZWgw398UeA1ZXH
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_zfPw38AQZWgw398UeA1ZXH
            source_type: api_record
            title: 维基数据：王少姬（Q703142）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q703142
            external_identifier: Q703142
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:37.088Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%91%E5%A7%AC
        - id: cs_XHzRP174ZCkh3eS3unPQM4
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_AKeEWhfT4Euh5ebeXcSrAs
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_AKeEWhfT4Euh5ebeXcSrAs
            source_type: api_record
            title: 维基数据：陈伯宗（Q718222）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q718222
            external_identifier: Q718222
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:59.225Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97
        - id: cs_C77K19dpqLP2xfgUJhHAJm
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_abPCQHAGDat3qJGD25A3T8
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 王少姬，金紫光禄大夫王固之女，天嘉元年，册为皇太子妃，陈伯宗即皇帝位，立为皇后
          interpretation_note: null
          source:
            id: s_abPCQHAGDat3qJGD25A3T8
            source_type: website
            title: 中文维基百科：陳伯宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:28.165Z
            metadata_json: null
        - id: cs_XpRyXNodhqKVVv7n8geP2L
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_f9m1X3MeQzSuAEYmR2XUFd
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 王少姬，金紫光禄大夫王固之女，天嘉元年，册为皇太子妃，陈伯宗即皇帝位，立为皇后
          interpretation_note: null
          source:
            id: s_f9m1X3MeQzSuAEYmR2XUFd
            source_type: website
            title: 中文维基百科：陳伯宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:58.629Z
            metadata_json: null
        - id: cs_bXkiJQ16bXGiyURRF7i8FC
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_HHQ4zhuuvQ3kPRsBjvS4Hp
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 王少姬，金紫光禄大夫王固之女，天嘉元年，册为皇太子妃，陈伯宗即皇帝位，立为皇后
          interpretation_note: null
          source:
            id: s_HHQ4zhuuvQ3kPRsBjvS4Hp
            source_type: website
            title: 中文维基百科：陳伯宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:52:00.005Z
            metadata_json: null
        - id: cs_ktrZRJWA1g4PyFMxgLPVfw
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_D4evguUVTNmGuHbGXbAo1c
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 王少姬，金紫光禄大夫王固之女，天嘉元年，册为皇太子妃，陈伯宗即皇帝位，立为皇后。
          interpretation_note: null
          source:
            id: s_D4evguUVTNmGuHbGXbAo1c
            source_type: website
            title: 中文维基百科：陳伯宗
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:55.992Z
            metadata_json: null
        - id: cs_FnxNFZeEGrMdq2icskoEL3
          claim_id: c_RY9wPuAQkhYtRUcwp6DnxE
          source_id: s_BrZpkPr5E42n14JGk2Q8s2
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 南陈废帝陈伯宗皇后。天嘉元年（560年），为皇太子妃，566年，陈伯宗即位，立为皇后。
          interpretation_note: null
          source:
            id: s_BrZpkPr5E42n14JGk2Q8s2
            source_type: website
            title: 中文维基百科：王少姬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%91%E5%A7%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:15.365Z
            metadata_json: null
      object_person:
        id: p_P3HJSwZEVayyXGAC4NpdpW
        status: active
        display_name: 王少姬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈伯宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈伯宗，中国陈朝皇帝。维基数据以独立条目 Q718222 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 陈伯宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_P3HJSwZEVayyXGAC4NpdpW | 王少姬 | accepted |

## 外部来源

- [维基数据：陈伯宗（Q718222）](https://www.wikidata.org/wiki/Q718222)
- [维基数据：王少姬（Q703142）](https://www.wikidata.org/wiki/Q703142)
- [中文维基百科：陳伯宗](https://zh.wikipedia.org/wiki/%E9%99%B3%E4%BC%AF%E5%AE%97)
- [中文维基百科：王少姬](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%91%E5%A7%AC)
- [CBDB 中国历代人物传记资料库：陳伯宗（21301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21301&o=json)
