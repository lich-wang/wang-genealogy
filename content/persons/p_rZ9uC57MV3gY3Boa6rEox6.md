---
schema: wang-person/v1
id: p_rZ9uC57MV3gY3Boa6rEox6
status: active
merged_into: null
display_name: 同安公主
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wQyMC6N-SUOcgDmmTgdC9N
        subject_person_id: p_rZ9uC57MV3gY3Boa6rEox6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 同安公主（560年代—650年代652年后），李氏，唐高祖李渊同母姐妹，李昞和独孤氏之女。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8QT9a8fgN36SnW72vMzzri
          claim_id: c_wQyMC6N-SUOcgDmmTgdC9N
          source_id: s_MZEzlNsiuVxO-P-Ar45S3k
          stance: supports
          locator: 导言
          quotation: 同安公主（560年代—650年代652年后），李氏，唐高祖李渊同
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_MZEzlNsiuVxO-P-Ar45S3k
            source_type: website
            title: 中文维基百科：同安公主
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%90%8C%E5%AE%89%E5%85%AC%E4%B8%BB
            external_identifier: Q10917554
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-13T09:29:27.764Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FcLSnpYNg64D9vkVxR5HaA
        subject_person_id: p_rZ9uC57MV3gY3Boa6rEox6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 同安公主
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MZ6bLC7JNhCxE1L7WWofRN
          claim_id: c_FcLSnpYNg64D9vkVxR5HaA
          source_id: s_mSbffPsh7E5HNYBd1cy7gj
          stance: supports
          locator: Q10917554
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_mSbffPsh7E5HNYBd1cy7gj
            source_type: api_record
            title: 维基数据：同安公主（Q10917554）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10917554
            external_identifier: Q10917554
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%90%8C%E5%AE%89%E5%85%AC%E4%B8%BB
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_D88ju7RwCyF8T5g5KjHqGH
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rZ9uC57MV3gY3Boa6rEox6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZyGfaepsaPDxQPdJ2EfAF
          claim_id: c_D88ju7RwCyF8T5g5KjHqGH
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jP68TirswtwKcjvQJfKLb9
            source_type: api_record
            title: 维基数据：王裕（Q25918183）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918183
            external_identifier: Q25918183
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2)
        - id: cs_8YKU3dW2143cMHXL3xAF4q
          claim_id: c_D88ju7RwCyF8T5g5KjHqGH
          source_id: s_mSbffPsh7E5HNYBd1cy7gj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_nT7k2pCzDkpksQ1s3p6rcV
        status: active
        display_name: 王裕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 同安公主

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 同安公主（560年代—650年代652年后），李氏，唐高祖李渊同母姐妹，李昞和独孤氏之女。 | accepted |
| name.primary | 同安公主 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nT7k2pCzDkpksQ1s3p6rcV | 王裕 | accepted |

## 外部来源

- [维基数据：同安公主（Q10917554）](https://www.wikidata.org/wiki/Q10917554)
- [维基数据：王裕（Q25918183）](https://www.wikidata.org/wiki/Q25918183)
- [中文维基百科：同安公主](https://zh.wikipedia.org/wiki/%E5%90%8C%E5%AE%89%E5%85%AC%E4%B8%BB)
