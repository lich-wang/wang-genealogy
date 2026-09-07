---
schema: wang-person/v1
id: p_H3Gcv5yupi2SQ8G254fb4U
status: active
merged_into: null
display_name: 王敬直
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IbfdNZNKFq-ygFAh-JrTQF
        subject_person_id: p_H3Gcv5yupi2SQ8G254fb4U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬直（?—?），唐朝太原郡祁县（今山西省祁縣）人，王珪幼子，封南城县男。 贞观十一年（637年），唐太宗第三女南平公主下嫁王敬直。出嫁时，王珪夫妻命令公主执行拜见公婆之礼，礼成而退。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2ndUxGU1Y2YZMznUgLqq0s
          claim_id: c_IbfdNZNKFq-ygFAh-JrTQF
          source_id: s_8pJr8ezgfX7EGNu_AP7qhU
          stance: supports
          locator: 导言
          quotation: 王敬直（?—?），唐朝太原郡祁县（今山西省祁縣）人，王珪幼子，封
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_8pJr8ezgfX7EGNu_AP7qhU
            source_type: website
            title: 中文维基百科：王敬直
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%95%AC%E7%9B%B4
            external_identifier: Q10414698
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WdA7Z7v8SmuFbrAmZPSvn4
        subject_person_id: p_H3Gcv5yupi2SQ8G254fb4U
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 667年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0667-01-01
            latest: 0667-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7HMPg6VMiw2e1rBD4Qcm5y
          claim_id: c_WdA7Z7v8SmuFbrAmZPSvn4
          source_id: s_GLfxNT7eq2vmzS7sKfBsTK
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8QbaYu7q1Mtn5sQbFBcPC
        subject_person_id: p_H3Gcv5yupi2SQ8G254fb4U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬直
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4PiFw6GFaLTKoQfAXaZMS4
          claim_id: c_E8QbaYu7q1Mtn5sQbFBcPC
          source_id: s_GLfxNT7eq2vmzS7sKfBsTK
          stance: supports
          locator: Q10414698
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
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LHBSPDK14jc8DKwmrKh3w4
        subject_person_id: p_dpxJ79yjeoZcbwCdkzQmv6
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_H3Gcv5yupi2SQ8G254fb4U
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jvej1jSZUN2HTRU6gxDj6t
          claim_id: c_LHBSPDK14jc8DKwmrKh3w4
          source_id: s_GLfxNT7eq2vmzS7sKfBsTK
          stance: supports
          locator: P22（父）
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
        - id: cs_rbWQ1v9B9sPDE3x6XxJy18
          claim_id: c_LHBSPDK14jc8DKwmrKh3w4
          source_id: s_pb1L8DCLiqYrJ4pXTXG8ce
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pb1L8DCLiqYrJ4pXTXG8ce
            source_type: api_record
            title: 维基数据：王珪（Q1562454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1562454
            external_identifier: Q1562454
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.404Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%AA_(%E5%94%90%E6%9C%9D)
        - id: cs_7dQbD3xqzc75Pk2w6TzG3k
          claim_id: c_LHBSPDK14jc8DKwmrKh3w4
          source_id: s_oDcKaN4z8r7MvCks95jRoK
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_oDcKaN4z8r7MvCks95jRoK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（33013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33013&o=json
            external_identifier: CBDB:33013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:53.710Z
            metadata_json: null
      object_person:
        id: p_dpxJ79yjeoZcbwCdkzQmv6
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children:
    - claim:
        id: c_AxYrbRCPoFvLub1B4a6mAF
        subject_person_id: p_H3Gcv5yupi2SQ8G254fb4U
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_yoNE8YTcx3diMtnFekRLaE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jt7dX8suNtBSHg8an3d2s5
          claim_id: c_AxYrbRCPoFvLub1B4a6mAF
          source_id: s_GLfxNT7eq2vmzS7sKfBsTK
          stance: supports
          locator: P40（子女）
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
        - id: cs_PnEg8ix4GJy5hj4d2AsCYp
          claim_id: c_AxYrbRCPoFvLub1B4a6mAF
          source_id: s_UirJ3y53QSbPkiPZK3fDQF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UirJ3y53QSbPkiPZK3fDQF
            source_type: api_record
            title: 维基数据：王焘（Q4255471）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q4255471
            external_identifier: Q4255471
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:45.578Z
            metadata_json: null
      object_person:
        id: p_yoNE8YTcx3diMtnFekRLaE
        status: active
        display_name: 王焘
        merged_into_person_id: null
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
        id: p_Foe7ojQTNaLkZzVm1iCNbV
        status: active
        display_name: 南平公主
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王敬直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬直（?—?），唐朝太原郡祁县（今山西省祁縣）人，王珪幼子，封南城县男。 贞观十一年（637年），唐太宗第三女南平公主下嫁王敬直。出嫁时，王珪夫妻命令公主执行拜见公婆之礼，礼成而退。 | accepted |
| death.date | 667年 | accepted |
| name.primary | 王敬直 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dpxJ79yjeoZcbwCdkzQmv6 | 王珪 | accepted |
| children | p_yoNE8YTcx3diMtnFekRLaE | 王焘 | accepted |
| spouses | p_Foe7ojQTNaLkZzVm1iCNbV | 南平公主 | accepted |

## 外部来源

- [维基数据：南平公主（Q4309898）](https://www.wikidata.org/wiki/Q4309898)
- [维基数据：王珪（Q1562454）](https://www.wikidata.org/wiki/Q1562454)
- [维基数据：王敬直（Q10414698）](https://www.wikidata.org/wiki/Q10414698)
- [维基数据：王焘（Q4255471）](https://www.wikidata.org/wiki/Q4255471)
- [中文维基百科：王敬直](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%95%AC%E7%9B%B4)
- [CBDB 中国历代人物传记资料库：王珪（33013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33013&o=json)
