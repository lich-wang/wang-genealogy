---
schema: wang-person/v1
id: p_Foe7ojQTNaLkZzVm1iCNbV
status: active
merged_into: null
display_name: 南平公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_suHBxd4MKFNe040xRDPdxB
        subject_person_id: p_Foe7ojQTNaLkZzVm1iCNbV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 南平公主（7世纪？—650年），中国唐朝唐太宗李世民第三女。贞观十一年（637年），南平公主下嫁王珪的幼子南城县男王敬直。出嫁时，王珪夫妻命令公主执行拜见公婆之礼，礼成而退。这是恢复南北朝以来，失落的古礼，唐太宗非常高兴。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_uP-G8K0IjOLSj0QdrS0gjK
          claim_id: c_suHBxd4MKFNe040xRDPdxB
          source_id: s_P7ry9WPNhU6F6b0Wrcl4Mu
          stance: supports
          locator: 导言
          quotation: 南平公主（7世纪？—650年），中国唐朝唐太宗李世民第三女。贞观
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_P7ry9WPNhU6F6b0Wrcl4Mu
            source_type: website
            title: 中文维基百科：南平公主 (唐朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8D%97%E5%B9%B3%E5%85%AC%E4%B8%BB_(%E5%94%90%E6%9C%9D)
            external_identifier: Q4309898
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dp88ZPMpLYaE4CXoazGkTQ
        subject_person_id: p_Foe7ojQTNaLkZzVm1iCNbV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 南平公主
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y5W7LsEfHdXeKVKYdWXK35
          claim_id: c_dp88ZPMpLYaE4CXoazGkTQ
          source_id: s_Wy6TZFfUXoAJB7zfBNMGnf
          stance: supports
          locator: Q4309898
          quotation: null
          interpretation_note: null
          source:
            id: s_Wy6TZFfUXoAJB7zfBNMGnf
            source_type: api_record
            title: 维基数据：南平公主（Q4309898）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4309898
            external_identifier: Q4309898
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.404Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8D%97%E5%B9%B3%E5%85%AC%E4%B8%BB_(%E5%94%90%E6%9C%9D)
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MXxnXG19XKUkvzCHDpakgE
        subject_person_id: p_Foe7ojQTNaLkZzVm1iCNbV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H3Gcv5yupi2SQ8G254fb4U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E3CwFdzZ5A8iu24jaxWndU
          claim_id: c_MXxnXG19XKUkvzCHDpakgE
          source_id: s_GLfxNT7eq2vmzS7sKfBsTK
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_GLfxNT7eq2vmzS7sKfBsTK
            source_type: api_record
            title: 维基数据：王敬直（Q10414698）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10414698
            external_identifier: Q10414698
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:44.652Z
            metadata_json: null
        - id: cs_pJuJ7WuN6Q2rK5M19Mq3R9
          claim_id: c_MXxnXG19XKUkvzCHDpakgE
          source_id: s_Wy6TZFfUXoAJB7zfBNMGnf
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Wy6TZFfUXoAJB7zfBNMGnf
            source_type: api_record
            title: 维基数据：南平公主（Q4309898）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4309898
            external_identifier: Q4309898
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.404Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8D%97%E5%B9%B3%E5%85%AC%E4%B8%BB_(%E5%94%90%E6%9C%9D)
      object_person:
        id: p_H3Gcv5yupi2SQ8G254fb4U
        status: active
        display_name: 王敬直
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 南平公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 南平公主（7世纪？—650年），中国唐朝唐太宗李世民第三女。贞观十一年（637年），南平公主下嫁王珪的幼子南城县男王敬直。出嫁时，王珪夫妻命令公主执行拜见公婆之礼，礼成而退。这是恢复南北朝以来，失落的古礼，唐太宗非常高兴。 | accepted |
| name.primary | 南平公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_H3Gcv5yupi2SQ8G254fb4U | 王敬直 | accepted |

## 外部来源

- [维基数据：南平公主（Q4309898）](https://www.wikidata.org/wiki/Q4309898)
- [维基数据：王敬直（Q10414698）](https://www.wikidata.org/wiki/Q10414698)
- [中文维基百科：南平公主 (唐朝)](https://zh.wikipedia.org/wiki/%E5%8D%97%E5%B9%B3%E5%85%AC%E4%B8%BB_(%E5%94%90%E6%9C%9D))
